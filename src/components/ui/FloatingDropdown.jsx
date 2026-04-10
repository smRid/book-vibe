import React, { useEffect, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const MOBILE_GUTTER = 16;

const FloatingDropdown = ({
    anchorRef,
    open,
    onClose,
    children,
    className = "",
    offset = 8,
    matchAnchorWidth = true,
}) => {
    const [position, setPosition] = useState(null);

    useLayoutEffect(() => {
        if (!open || !anchorRef?.current) {
            return;
        }

        const updatePosition = () => {
            const rect = anchorRef.current.getBoundingClientRect();
            const maxWidth = window.innerWidth - MOBILE_GUTTER * 2;
            const width = matchAnchorWidth
                ? Math.min(rect.width, maxWidth)
                : Math.min(320, maxWidth);
            const left = Math.min(
                Math.max(rect.left, MOBILE_GUTTER),
                window.innerWidth - width - MOBILE_GUTTER,
            );

            setPosition({
                top: rect.bottom + offset,
                left,
                width,
            });
        };

        updatePosition();

        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition, true);

        return () => {
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition, true);
        };
    }, [anchorRef, matchAnchorWidth, offset, open]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose?.();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [onClose, open]);

    if (!open || !position) {
        return null;
    }

    return createPortal(
        <>
            <button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-40 cursor-default bg-transparent"
                onClick={onClose}
            />
            <div
                className={`fixed z-50 ${className}`}
                style={{
                    top: `${position.top}px`,
                    left: `${position.left}px`,
                    width: `${position.width}px`,
                }}
            >
                {children}
            </div>
        </>,
        document.body,
    );
};

export default FloatingDropdown;
