import React from "react";
import { useLoaderData } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
  LabelList,
  CartesianGrid
} from "recharts";

const PagesToRead = () => {

  const books = useLoaderData();

  // books → chart data
  const data = books.map(book => ({
    name: book.bookName,
    pages: book.totalPages
  }));

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF0000",
    "#AA00FF",
    "#00B8D9",
    "#FF5E7E",
    "#22C55E",
    "#F97316"
  ];


  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
      C${x + width / 3},${y + height}
       ${x + width / 2},${y + height / 3}
       ${x + width / 2},${y}
      C${x + width / 2},${y + height / 3}
       ${x + (2 * width) / 3},${y + height}
       ${x + width},${y + height}
      Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    if (x == null || y == null) return null;

    return (
      <path
        d={getPath(x, y, width, height)}
        fill={fill}
      />
    );
  };

  return (

    <div className="container mx-auto mt-10">

      <div className="w-full h-[80vh] bg-gray-100 rounded-2xl p-6">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={data}
            margin={{
              top: 40,
              right: 30,
              left: 20,
              bottom: 80
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              interval={0}
              angle={-20}
              textAnchor="end"
            />

            <YAxis />

            <Bar dataKey="pages" shape={<TriangleBar />}>


              <LabelList
                dataKey="pages"
                position="top"
              />


              {
                data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={colors[index % colors.length]}
                  />
                ))
              }

            </Bar>

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );
};

export default PagesToRead;