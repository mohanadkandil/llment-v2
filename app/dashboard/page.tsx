"use client";
import {
  LineChart,
  Card as CardT,
  Flex,
  Switch,
  Title,
  DonutChart,
} from "@tremor/react";
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import Link from "next/link";
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";

const DialogDemo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Link className="block p-2 rounded hover:bg-gray-200" href="#">
          Database
        </Link>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const chartdata3 = [
  {
    date: "Jan 23",
    "Answered Questions": 167,
    "unAnswered Questions": 145,
  },
  {
    date: "Feb 23",
    "Answered Questions": 125,
    "unAnswered Questions": 110,
  },
  {
    date: "Mar 23",
    "Answered Questions": 156,
    "unAnswered Questions": 90,
  },
];

const dataSource = [
  {
    name: "PDF",
    sales: 38.6,
  },
  {
    name: "Document",
    sales: 22.6,
  },
  {
    name: "PPT",
    sales: 30.8,
  },
  {
    name: "Website",
    sales: 25.6,
  },
];

const Page = () => {
  const [value, setValue] = useState(true);

  const valueFormatter = (number: number) => {
    return `${number?.toFixed(2)}%`;
  };
  return (
    <div className="bg-gray-100 p-8">
      <div className="flex">
        <div className="w-64">
          <div className="flex items-center space-x-4 p-2 mb-5">
            <Avatar className="bg-blue-500" />
            <span>Katja Lekke</span>
          </div>
          <div className="flex flex-col space-y-2">
            <Link className="block p-2 rounded hover:bg-gray-200" href="#">
              Dashboard
            </Link>

            <Dialog>
              <DialogTrigger asChild>
                <Link className="block p-2 rounded hover:bg-gray-200" href="#">
                  Database
                </Link>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] sm:h-[400px]">
                <DialogHeader>
                  <DialogTitle>Database Managment</DialogTitle>
                  <DialogDescription>
                    Make changes to TUM.support Databse. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      defaultValue="Pedro Duarte"
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                      Username
                    </Label>
                    <Input
                      id="username"
                      defaultValue="@peduarte"
                      className="col-span-3"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Link className="block p-2 rounded hover:bg-gray-200" href="#">
              PDF
            </Link>
            <Link className="block p-2 rounded hover:bg-gray-200" href="#">
              Document
            </Link>
            <Link className="block p-2 rounded hover:bg-gray-200" href="#">
              PPT
            </Link>
          </div>
        </div>
        <div className="flex-1 ml-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold">Dashboards</h1>
            <Select>
              <SelectTrigger id="timeframe">
                <SelectValue placeholder="Today" />
              </SelectTrigger>
              <SelectContent position="popper">
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="this_week">This Week</SelectItem>
                <SelectItem value="this_month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 gap-6 mb-6">
            <Card className="bg-[#E3F5FF] shadow rounded-2xl h-[130px]">
              <CardHeader>
                <CardTitle className="text-xl">
                  Email inquiry (this week)
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row justify-between items-center">
                <p className="text-4xl font-semibold">50</p>
                <p className="text-sm text-green-500">
                  +11.01% <IconTrendingup className="text-green-500" />
                </p>
              </CardContent>
            </Card>
            <Card className="w-full bg-[#E5ECF6] shadow rounded-2xl h-[130px]">
              <CardHeader>
                <CardTitle className="text-xl">Unanswered emails</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row justify-between items-center">
                <p className="text-4xl font-semibold">20</p>
                <p className="text-sm text-red-500">
                  -0.03% <IconTrendingdown className="text-red-500" />
                </p>
              </CardContent>
            </Card>
            <Card className="w-full bg-[#E3F5FF] shadow rounded-2xl h-[130px]">
              <CardHeader>
                <CardTitle>Answered emails</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row justify-between items-center">
                <p className="text-4xl font-semibold">30</p>
                <p className="text-sm text-green-500">
                  +15.03% <IconTrendingup className="text-green-500" />
                </p>
              </CardContent>
            </Card>
            <Card className="w-full bg-[#E5ECF6] shadow rounded-2xl">
              <CardHeader>
                <CardTitle>Weekly visitors</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row justify-between items-center">
                <p className="text-4xl font-semibold">239K</p>
                <p className="text-sm text-green-500">
                  +6.08% <IconTrendingup className="text-green-500" />
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-2 mb-6">
            <div className="grid grid-rows-2 mb-6">
              <CardT className="max-w-lg mx-auto p-0 m-0">
                <div className="p-6">
                  <LineChart
                    className="h-72 mt-4"
                    data={chartdata3}
                    index="date"
                    categories={["Answered Questions", "Unanswered Questions"]}
                    colors={["neutral", "indigo", "rose", "orange", "emerald"]}
                    yAxisWidth={30}
                    enableLegendSlider={value}
                  />
                </div>
              </CardT>
            </div>
            <div className="grid grid-rows-2 gap-6">
              <CardT className="max-w-lg">
                <Title>Most referenced data source </Title>
                <DonutChart
                  className="mt-6"
                  data={dataSource}
                  category="sales"
                  index="name"
                  valueFormatter={valueFormatter}
                  colors={[
                    "slate",
                    "violet",
                    "indigo",
                    "rose",
                    "cyan",
                    "amber",
                  ]}
                />
              </CardT>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function IconTrendingdown(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 17 13.5 8.5 8.5 13.5 2 7" />
      <polyline points="16 17 22 17 22 11" />
    </svg>
  );
}

function IconTrendingup(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}

export default Page;
