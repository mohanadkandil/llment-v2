// @ts-nocheck
"use client";
import {
  LineChart,
  Card as CardT,
  Flex,
  Title,
  DonutChart,
} from "@tremor/react";
import { useEffect, useState } from "react";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Switch } from "@/components/ui/switch";

const url = "https://tum.support/files_list2";
const username = "a";
const password = "aZJnk_JwKYtqQa84dUFB";
const encodedCredentials = Buffer.from(`${username}:${password}`).toString(
  "base64"
);

export function TabsDemo() {
  // const [loading, setLoading] = useState(true);
  // async function getData() {
  //   const res = await fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Basic ${encodedCredentials}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .then((data) => setData(data))
  //     .finally(() => setLoading(false))
  //     .catch((error) => console.error("Error:", error));
  //   return res;
  // }

  // useEffect(() => {
  //   setLoading(true);
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Basic ${encodedCredentials}`,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .finally(() => setLoading(false))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  return (
    <Tabs
      defaultValue="Add"
      className="w-[400px] flex items-center flex-col justify-center"
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Add">Add</TabsTrigger>
        <TabsTrigger value="Delete">Delete</TabsTrigger>
      </TabsList>
      <TabsContent value="Add">
        <Card>
          <CardHeader>
            <CardTitle>Add Data</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you&apos;re
              done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Delete">
        <Card>
          <CardHeader>
            <CardTitle>Delete Data</CardTitle>
            <CardDescription>
              Change your password here. After saving, you&apos;ll be logged
              out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <Table>
              <TableCaption>
                A list of files uploaded to the Automatic Search System
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Links</TableHead>
                  <TableHead>Delete</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data.files.map((q, i) => {
                  <TableRow key={i}>
                    <TableCell className="font-medium">{q.filename}</TableCell>
                    <TableCell>{q.url}</TableCell>
                  </TableRow>;
                })}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total</TableCell>
                  <TableCell className="text-right"></TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

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
              <DialogContent className="">
                <DialogHeader>
                  <DialogTitle>Database Managment</DialogTitle>
                  <DialogDescription>
                    Make changes to TUM.support Databse. Click save when
                    you&apos;re done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <TabsDemo />
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

const data = {
  files: [
    {
      filename: "Adv_Int_Exp_general_WS18.pdf",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Adv_Int_Exp_general_WS18.pdf",
    },
    {
      filename: "Anerkennungsformular_1222_eng.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Anerkennungsformular_1222_eng.pdf",
    },
    {
      filename:
        "Application_for_a_copy_of_an_exam_in_German_and_in_English_050723.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Application_for_a_copy_of_an_exam_in_German_and_in_English_050723.pdf",
    },
    {
      filename:
        "Application_for_a_leave_of_absence_in_German_and_in_English_050723.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Application_for_a_leave_of_absence_in_German_and_in_English_050723.pdf",
    },
    {
      filename:
        "Application_for_additional_post-exam_review_in_German_and_in_English_050723.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Application_for_additional_post-exam_review_in_German_and_in_English_050723.pdf",
    },
    {
      filename: "BMT FAQ Seats Allocation TUMonline.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~BMT%20FAQ%20Seats%20Allocation%20TUMonline.pdf",
    },
    {
      filename: "BMT-Guideline_Final_Thesis_final_01.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~BMT-Guideline_Final_Thesis_final_01.pdf",
    },
    {
      filename: "Confirmation Internship TUM SoM.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Confirmation%20Internship%20TUM%20SoM.pdf",
    },
    {
      filename: "Final_Thesis_Guidelines_080523.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Final_Thesis_Guidelines_080523.pdf",
    },
    {
      filename: "Form_Permission_to_view_my_final_thesis_190123.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Form_Permission_to_view_my_final_thesis_190123.pdf",
    },
    {
      filename: "Form_Proof_of_Proficiency_in_German_13022023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Form_Proof_of_Proficiency_in_German_13022023.pdf",
    },
    {
      filename: "German-language-requirements-Info-Sheet_01062023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~German-language-requirements-Info-Sheet_01062023.pdf",
    },
    {
      filename: "Information_Sheet_Communication_Skills_010923.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Information_Sheet_Communication_Skills_010923.pdf",
    },
    {
      filename: "Information_Sheet_Taking_Master_Exams_early_190123.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Information_Sheet_Taking_Master_Exams_early_190123.pdf",
    },
    {
      filename: "Information_Softskills_WiSe_23.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Information_Softskills_WiSe_23.pdf",
    },
    {
      filename: "Information_sheet_Project_studies_190123.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Information_sheet_Project_studies_190123.pdf",
    },
    {
      filename: "Information_sheet_Registering_your_thesis_120523.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Information_sheet_Registering_your_thesis_120523.pdf",
    },
    {
      filename: "Information_sheet_Submitting_your_thesis_030423.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Information_sheet_Submitting_your_thesis_030423.pdf",
    },
    {
      filename: "Leitfaden-Anerkennungen_TUM-Bachelor_111022.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Leitfaden-Anerkennungen_TUM-Bachelor_111022.pdf",
    },
    {
      filename: "Merkblatt_Vorziehen_von_Masterpruefungen_230123.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Merkblatt_Vorziehen_von_Masterpruefungen_230123.pdf",
    },
    {
      filename: "MiM_German-language-requirements-Info-Sheet_13022023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~MiM_German-language-requirements-Info-Sheet_13022023.pdf",
    },
    {
      filename: "Non-ERASMUS_How to fill out the Learning Agreement.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Non-ERASMUS_How%20to%20fill%20out%20the%20Learning%20Agreement.pdf",
    },
    {
      filename: "OLA Anleitung_ST_April_2023_EN_Outgoing_angepasst.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~OLA%20Anleitung_ST_April_2023_EN_Outgoing_angepasst.pdf",
    },
    {
      filename:
        "Recognition of credits from international modules_BMT_AUG_2023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition%20of%20credits%20from%20international%20modules_BMT_AUG_2023.pdf",
    },
    {
      filename:
        "Recognition of credits from international modules_BSMT_AUG_2023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition%20of%20credits%20from%20international%20modules_BSMT_AUG_2023.pdf",
    },
    {
      filename:
        "Recognition of credits from international modules_MCS_AUG_2023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition%20of%20credits%20from%20international%20modules_MCS_AUG_2023.pdf",
    },
    {
      filename:
        "Recognition of credits from international modules_MMT_AUG_2023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition%20of%20credits%20from%20international%20modules_MMT_AUG_2023.pdf",
    },
    {
      filename:
        "Recognition of credits from international modules_MSMT_AUG_2023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition%20of%20credits%20from%20international%20modules_MSMT_AUG_2023.pdf",
    },
    {
      filename:
        "Recognition of credits from international modules_MiM_AUG_2023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition%20of%20credits%20from%20international%20modules_MiM_AUG_2023.pdf",
    },
    {
      filename:
        "Recognition_of_TUM_courses_attended_before_starting_and_during_your_studies_at_TUM_School_of_Management_28022023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition_of_TUM_courses_attended_before_starting_and_during_your_studies_at_TUM_School_of_Management_28022023.pdf",
    },
    {
      filename:
        "Recognition_of_courses_attended_ataGerman_University_before_starting_and_during_your_studies_at_TUM_School_of_Management_28022023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition_of_courses_attended_ataGerman_University_before_starting_and_during_your_studies_at_TUM_School_of_Management_28022023.pdf",
    },
    {
      filename:
        "Recognition_of_courses_attended_ataforeign_University_before_starting_your_studies_at_TUM_School_of_Management_28022023.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~Recognition_of_courses_attended_ataforeign_University_before_starting_your_studies_at_TUM_School_of_Management_28022023.pdf",
    },
    {
      filename: "V12_FAQ Seats Allocation TUMonline.docx",
      url: "https://tum.support/pdfs/Aktuelle%20Programmhefte%20und%20Programminformationen%2C%20Informationsbl%C3%A4tter%20und%20Erl%C3%A4uterungen~V12_FAQ%20Seats%20Allocation%20TUMonline.pdf",
    },
    {
      filename: "Commonly used Abbreviations.docx",
      url: "https://tum.support/pdfs/Commonly%20used%20Abbreviations.pdf",
    },
    {
      filename: "FAQ from website - Kopie.txt",
      url: "https://tum.support/pdfs/FAQ%20from%20website%20-%20Kopie.pdf",
    },
    {
      filename: "FAQ from website.jsonl",
      url: "https://tum.support/pdfs/FAQ%20from%20website.pdf",
    },
    {
      filename: "20231121_Standardantworten_mastercounseling_chatbot.docx",
      url: "https://tum.support/pdfs/Kataloge%20Standardantworten~20231121_Standardantworten_mastercounseling_chatbot.pdf",
    },
    {
      filename: "20231121_standardantworten_bachelorcounseling_chatbot.docx",
      url: "https://tum.support/pdfs/Kataloge%20Standardantworten~20231121_standardantworten_bachelorcounseling_chatbot.pdf",
    },
    {
      filename: "Standardantworten MiM Heilbronn_neu.docx",
      url: "https://tum.support/pdfs/Kataloge%20Standardantworten~Standardantworten%20MiM%20Heilbronn_neu.pdf",
    },
    {
      filename: "Standardantworten_BMT_HN-chatbot.docx",
      url: "https://tum.support/pdfs/Kataloge%20Standardantworten~Standardantworten_BMT_HN-chatbot.pdf",
    },
    {
      filename: "._230120_TUM_5in1_Master_Altarfalz_digital.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "._230120_TUM_5in1_Master_Altarfalz_digital.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "230120_TUM_5in1_Master_Altarfalz_digital.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "230120_TUM_5in1_Master_Altarfalz_digital.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "230120_TUM_5in1_Master_Altarfalz_digital.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "AdobeFnt23.lst",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~AdobeFnt23.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._02_230110_Rottmueller_Marina_Color_CMYK.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._02_230110_Rottmueller_Marina_Color_CMYK.pdf",
    },
    {
      filename: "._02_ReynaldoValdezGarcia.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._02_ReynaldoValdezGarcia.pdf",
    },
    {
      filename: "._1_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._1_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-2099.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._220608-TUM-foto-christiankasper-2099.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-3120_Ekaterina Braun.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._220608-TUM-foto-christiankasper-3120_Ekaterina%20Braun.pdf",
    },
    {
      filename: "._Martin_Schramm_MSMT.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._Martin_Schramm_MSMT.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._application_period.pdf",
    },
    {
      filename: "._duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._duration.pdf",
    },
    {
      filename: "._language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._language.pdf",
    },
    {
      filename: "._location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._location.pdf",
    },
    {
      filename: "02_230110_Rottmueller_Marina_Color_CMYK.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~02_230110_Rottmueller_Marina_Color_CMYK.pdf",
    },
    {
      filename: "02_ReynaldoValdezGarcia.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~02_ReynaldoValdezGarcia.pdf",
    },
    {
      filename: "1_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~1_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "220608-TUM-foto-christiankasper-2099.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~220608-TUM-foto-christiankasper-2099.pdf",
    },
    {
      filename: "220608-TUM-foto-christiankasper-3120_Ekaterina Braun.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~220608-TUM-foto-christiankasper-3120_Ekaterina%20Braun.pdf",
    },
    {
      filename: "2_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~2_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "Akkreditierungslogos_schwarz-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~Akkreditierungslogos_schwarz-Print_03.pdf",
    },
    {
      filename: "Akkreditierungslogos_weiss-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~Akkreditierungslogos_weiss-Print_03.pdf",
    },
    {
      filename: "Aula_am+BC_Versand.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~Aula_am%2BBC_Versand.pdf",
    },
    {
      filename: "Martin_Schramm_MSMT.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~Martin_Schramm_MSMT.pdf",
    },
    {
      filename: "TUM_SOM_Combi_white_EN_horizontal_CMYK.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~TUM_SOM_Combi_white_EN_horizontal_CMYK.pdf",
    },
    {
      filename: "Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "WZS_SG16_Aussenansicht_Nacht-2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~WZS_SG16_Aussenansicht_Nacht-2.pdf",
    },
    {
      filename: "application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~application_period.pdf",
    },
    {
      filename: "duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~duration.pdf",
    },
    {
      filename: "language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~language.pdf",
    },
    {
      filename: "location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~location.pdf",
    },
    {
      filename: "._230120_TUM_5in1_Master_Altarfalz_digital.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "._230120_TUM_5in1_Master_Altarfalz_digital.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~._230120_TUM_5in1_Master_Altarfalz_digital.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._02_230110_Rottmueller_Marina_Color_CMYK.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._02_230110_Rottmueller_Marina_Color_CMYK.pdf",
    },
    {
      filename: "._02_ReynaldoValdezGarcia.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._02_ReynaldoValdezGarcia.pdf",
    },
    {
      filename: "._1_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._1_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-2099.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._220608-TUM-foto-christiankasper-2099.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-3120_Ekaterina Braun.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._220608-TUM-foto-christiankasper-3120_Ekaterina%20Braun.pdf",
    },
    {
      filename: "._Martin_Schramm_MSMT.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._Martin_Schramm_MSMT.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._application_period.pdf",
    },
    {
      filename: "._duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._duration.pdf",
    },
    {
      filename: "._language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._language.pdf",
    },
    {
      filename: "._location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~__MACOSX~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner~Links~._location.pdf",
    },
    {
      filename: "230120_TUM_5in1_Master_Altarfalz_digital Ordner.zip",
      url: "https://tum.support/pdfs/Marketingmaterialien~230120_TUM_5in1_Master_Altarfalz_digital%20Ordner.pdf",
    },
    {
      filename: "._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.pdf",
    },
    {
      filename: "._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.pdf",
    },
    {
      filename: "230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.pdf",
    },
    {
      filename: "230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "AdobeFnt23.lst",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~AdobeFnt23.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._230810_AdobeStock_550079776_Hintergrund.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._230810_AdobeStock_550079776_Hintergrund.pdf",
    },
    {
      filename: "._230810_AdobeStock_550079776_Vordergrund.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._230810_AdobeStock_550079776_Vordergrund.pdf",
    },
    {
      filename: "._application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._application_period.pdf",
    },
    {
      filename: "._contact-mail.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._contact-mail.pdf",
    },
    {
      filename:
        "._csm_tum-school-of-management-center-for-digital-transformation-prof-dr-li_92931dfb35.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._csm_tum-school-of-management-center-for-digital-transformation-prof-dr-li_92931dfb35.pdf",
    },
    {
      filename: "._duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._duration.pdf",
    },
    {
      filename: "._language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._language.pdf",
    },
    {
      filename: "._location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._location.pdf",
    },
    {
      filename: "._qr-code MMDT.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._qr-code%20MMDT.pdf",
    },
    {
      filename: "._qr-code MMDT_white.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._qr-code%20MMDT_white.pdf",
    },
    {
      filename: "2015_Logo_TUM_neg_CMYK.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~2015_Logo_TUM_neg_CMYK.pdf",
    },
    {
      filename: "230810_AdobeStock_550079776_Hintergrund.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~230810_AdobeStock_550079776_Hintergrund.pdf",
    },
    {
      filename: "230810_AdobeStock_550079776_Vordergrund.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~230810_AdobeStock_550079776_Vordergrund.pdf",
    },
    {
      filename: "Akkreditierungslogos_weiss-Screen_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~Akkreditierungslogos_weiss-Screen_03.pdf",
    },
    {
      filename: "application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~application_period.pdf",
    },
    {
      filename: "contact-mail.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~contact-mail.pdf",
    },
    {
      filename:
        "csm_tum-school-of-management-center-for-digital-transformation-prof-dr-li_92931dfb35.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~csm_tum-school-of-management-center-for-digital-transformation-prof-dr-li_92931dfb35.pdf",
    },
    {
      filename: "duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~duration.pdf",
    },
    {
      filename: "language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~language.pdf",
    },
    {
      filename: "location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~location.pdf",
    },
    {
      filename: "qr-code MMDT.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~qr-code%20MMDT.pdf",
    },
    {
      filename: "qr-code MMDT_white.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~qr-code%20MMDT_white.pdf",
    },
    {
      filename: "._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.pdf",
    },
    {
      filename: "._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~._230918_5in1_Master_Altarfalz_MMDT_Beileger_Final.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._230810_AdobeStock_550079776_Hintergrund.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._230810_AdobeStock_550079776_Hintergrund.pdf",
    },
    {
      filename: "._230810_AdobeStock_550079776_Vordergrund.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._230810_AdobeStock_550079776_Vordergrund.pdf",
    },
    {
      filename: "._application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._application_period.pdf",
    },
    {
      filename: "._contact-mail.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._contact-mail.pdf",
    },
    {
      filename:
        "._csm_tum-school-of-management-center-for-digital-transformation-prof-dr-li_92931dfb35.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._csm_tum-school-of-management-center-for-digital-transformation-prof-dr-li_92931dfb35.pdf",
    },
    {
      filename: "._duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._duration.pdf",
    },
    {
      filename: "._language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._language.pdf",
    },
    {
      filename: "._location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._location.pdf",
    },
    {
      filename: "._qr-code MMDT.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._qr-code%20MMDT.pdf",
    },
    {
      filename: "._qr-code MMDT_white.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~__MACOSX~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner~Links~._qr-code%20MMDT_white.pdf",
    },
    {
      filename: "230918_5in1_Master_Altarfalz_MMDT_Beileger_Final Ordner.zip",
      url: "https://tum.support/pdfs/Marketingmaterialien~230918_5in1_Master_Altarfalz_MMDT_Beileger_Final%20Ordner.pdf",
    },
    {
      filename: "._230503_TUM_3in1_Bachelor_digital.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~._230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "._230503_TUM_3in1_Bachelor_digital.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~._230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "._230503_TUM_3in1_Bachelor_digital.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~._230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "230503_TUM_3in1_Bachelor_digital.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "230503_TUM_3in1_Bachelor_digital.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "230503_TUM_3in1_Bachelor_digital.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "AdobeFnt23.lst",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~AdobeFnt23.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._1_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._1_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._220804_Heromotiv_mit_Botschaft_BMT2.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._220804_Heromotiv_mit_Botschaft_BMT2.pdf",
    },
    {
      filename: "._2_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._2_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._BA_STR_2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BA_STR_2.pdf",
    },
    {
      filename: "._BMT Heilbronn.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BMT%20Heilbronn.pdf",
    },
    {
      filename: "._BMT_HN_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BMT_HN_qr-code.pdf",
    },
    {
      filename: "._BMT_MUC_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BMT_MUC_qr-code.pdf",
    },
    {
      filename: "._BSMT_SR_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BSMT_SR_qr-code.pdf",
    },
    {
      filename: "._Blau mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Blau%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._Foto Felix Rihacek.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto%20Felix%20Rihacek.pdf",
    },
    {
      filename: "._Foto Felix Rihacek_FG.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto%20Felix%20Rihacek_FG.pdf",
    },
    {
      filename: "._Foto Rebecca Steurer.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto%20Rebecca%20Steurer.pdf",
    },
    {
      filename: "._Foto_Claire Wall.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto_Claire%20Wall.pdf",
    },
    {
      filename: "._HG_Bachelor.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._HG_Bachelor.pdf",
    },
    {
      filename: "._IMG_9778 (1) (1).psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._IMG_9778%20%281%29%20%281%29.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._gru\u0308n mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._gru%CC%88n%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._orange mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._orange%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._pic_Dalia Menglinova.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~._pic_Dalia%20Menglinova.pdf",
    },
    {
      filename: "1_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~1_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "220804_Heromotiv_mit_Botschaft_BMT2.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~220804_Heromotiv_mit_Botschaft_BMT2.pdf",
    },
    {
      filename: "2_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~2_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "Akkreditierungslogos_schwarz-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Akkreditierungslogos_schwarz-Print_03.pdf",
    },
    {
      filename: "Akkreditierungslogos_weiss-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Akkreditierungslogos_weiss-Print_03.pdf",
    },
    {
      filename: "BA_STR_2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~BA_STR_2.pdf",
    },
    {
      filename: "BMT Heilbronn.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~BMT%20Heilbronn.pdf",
    },
    {
      filename: "BMT_HN_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~BMT_HN_qr-code.pdf",
    },
    {
      filename: "BMT_MUC_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~BMT_MUC_qr-code.pdf",
    },
    {
      filename: "BSMT_SR_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~BSMT_SR_qr-code.pdf",
    },
    {
      filename: "Blau mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Blau%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "Foto Felix Rihacek.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Foto%20Felix%20Rihacek.pdf",
    },
    {
      filename: "Foto Felix Rihacek_FG.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Foto%20Felix%20Rihacek_FG.pdf",
    },
    {
      filename: "Foto Rebecca Steurer.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Foto%20Rebecca%20Steurer.pdf",
    },
    {
      filename: "Foto_Claire Wall.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Foto_Claire%20Wall.pdf",
    },
    {
      filename: "HG_Bachelor.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~HG_Bachelor.pdf",
    },
    {
      filename: "IMG_9778 (1) (1).psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~IMG_9778%20%281%29%20%281%29.pdf",
    },
    {
      filename: "TUM_SOM_Combi_white_EN_horizontal_CMYK.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~TUM_SOM_Combi_white_EN_horizontal_CMYK.pdf",
    },
    {
      filename: "Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "WZS_SG16_Aussenansicht_Nacht-2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~WZS_SG16_Aussenansicht_Nacht-2.pdf",
    },
    {
      filename: "gru\u0308n mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~gru%CC%88n%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "neues Foto HN.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~neues%20Foto%20HN.pdf",
    },
    {
      filename: "orange mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~orange%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "pic_Dalia Menglinova.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~pic_Dalia%20Menglinova.pdf",
    },
    {
      filename: "pin_blau.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~pin_blau.pdf",
    },
    {
      filename: "pin_gru\u0308n.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~pin_gru%CC%88n.pdf",
    },
    {
      filename: "pin_orange.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~Digital_TUM_3in1_Bachelor%20Ordner~Links~pin_orange.pdf",
    },
    {
      filename: "._230503_TUM_3in1_Bachelor_digital.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~._230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "._230503_TUM_3in1_Bachelor_digital.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~._230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "._230503_TUM_3in1_Bachelor_digital.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~._230503_TUM_3in1_Bachelor_digital.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._1_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._1_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._220804_Heromotiv_mit_Botschaft_BMT2.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._220804_Heromotiv_mit_Botschaft_BMT2.pdf",
    },
    {
      filename: "._2_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._2_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._BA_STR_2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BA_STR_2.pdf",
    },
    {
      filename: "._BMT Heilbronn.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BMT%20Heilbronn.pdf",
    },
    {
      filename: "._BMT_HN_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BMT_HN_qr-code.pdf",
    },
    {
      filename: "._BMT_MUC_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BMT_MUC_qr-code.pdf",
    },
    {
      filename: "._BSMT_SR_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._BSMT_SR_qr-code.pdf",
    },
    {
      filename: "._Blau mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Blau%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._Foto Felix Rihacek.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto%20Felix%20Rihacek.pdf",
    },
    {
      filename: "._Foto Felix Rihacek_FG.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto%20Felix%20Rihacek_FG.pdf",
    },
    {
      filename: "._Foto Rebecca Steurer.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto%20Rebecca%20Steurer.pdf",
    },
    {
      filename: "._Foto_Claire Wall.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Foto_Claire%20Wall.pdf",
    },
    {
      filename: "._HG_Bachelor.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._HG_Bachelor.pdf",
    },
    {
      filename: "._IMG_9778 (1) (1).psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._IMG_9778%20%281%29%20%281%29.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._gru\u0308n mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._gru%CC%88n%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._orange mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._orange%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._pic_Dalia Menglinova.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner~__MACOSX~Digital_TUM_3in1_Bachelor%20Ordner~Links~._pic_Dalia%20Menglinova.pdf",
    },
    {
      filename: "Digital_TUM_3in1_Bachelor Ordner.zip",
      url: "https://tum.support/pdfs/Marketingmaterialien~Digital_TUM_3in1_Bachelor%20Ordner.pdf",
    },
    {
      filename: "._230426_TUM_3in1_Bachelor_Altarfalz.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "._230426_TUM_3in1_Bachelor_Altarfalz.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "230426_TUM_3in1_Bachelor_Altarfalz.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "230426_TUM_3in1_Bachelor_Altarfalz.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "230426_TUM_3in1_Bachelor_Altarfalz.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "AdobeFnt23.lst",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~AdobeFnt23.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._1_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._1_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._220804_Heromotiv_mit_Botschaft_BMT2.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._220804_Heromotiv_mit_Botschaft_BMT2.pdf",
    },
    {
      filename: "._2_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._2_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._BA_STR_2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BA_STR_2.pdf",
    },
    {
      filename: "._BMT Heilbronn.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BMT%20Heilbronn.pdf",
    },
    {
      filename: "._BMT_HN_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BMT_HN_qr-code.pdf",
    },
    {
      filename: "._BMT_MUC_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BMT_MUC_qr-code.pdf",
    },
    {
      filename: "._BSMT_SR_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BSMT_SR_qr-code.pdf",
    },
    {
      filename: "._Blau mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Blau%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._Foto Felix Rihacek.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto%20Felix%20Rihacek.pdf",
    },
    {
      filename: "._Foto Felix Rihacek_FG.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto%20Felix%20Rihacek_FG.pdf",
    },
    {
      filename: "._Foto Rebecca Steurer.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto%20Rebecca%20Steurer.pdf",
    },
    {
      filename: "._Foto_Claire Wall.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto_Claire%20Wall.pdf",
    },
    {
      filename: "._HG_Bachelor.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._HG_Bachelor.pdf",
    },
    {
      filename: "._IMG_9778 (1) (1).psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._IMG_9778%20%281%29%20%281%29.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._gru\u0308n mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._gru%CC%88n%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._orange mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._orange%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._pic_Dalia Menglinova.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._pic_Dalia%20Menglinova.pdf",
    },
    {
      filename: "1_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~1_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "220804_Heromotiv_mit_Botschaft_BMT2.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~220804_Heromotiv_mit_Botschaft_BMT2.pdf",
    },
    {
      filename: "2_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~2_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "Akkreditierungslogos_schwarz-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Akkreditierungslogos_schwarz-Print_03.pdf",
    },
    {
      filename: "Akkreditierungslogos_weiss-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Akkreditierungslogos_weiss-Print_03.pdf",
    },
    {
      filename: "BA_STR_2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~BA_STR_2.pdf",
    },
    {
      filename: "BMT Heilbronn.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~BMT%20Heilbronn.pdf",
    },
    {
      filename: "BMT_HN_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~BMT_HN_qr-code.pdf",
    },
    {
      filename: "BMT_MUC_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~BMT_MUC_qr-code.pdf",
    },
    {
      filename: "BSMT_SR_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~BSMT_SR_qr-code.pdf",
    },
    {
      filename: "Blau mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Blau%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "Foto Felix Rihacek.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Foto%20Felix%20Rihacek.pdf",
    },
    {
      filename: "Foto Felix Rihacek_FG.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Foto%20Felix%20Rihacek_FG.pdf",
    },
    {
      filename: "Foto Rebecca Steurer.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Foto%20Rebecca%20Steurer.pdf",
    },
    {
      filename: "Foto_Claire Wall.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Foto_Claire%20Wall.pdf",
    },
    {
      filename: "HG_Bachelor.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~HG_Bachelor.pdf",
    },
    {
      filename: "IMG_9778 (1) (1).psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~IMG_9778%20%281%29%20%281%29.pdf",
    },
    {
      filename: "TUM_SOM_Combi_white_EN_horizontal_CMYK.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~TUM_SOM_Combi_white_EN_horizontal_CMYK.pdf",
    },
    {
      filename: "Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "WZS_SG16_Aussenansicht_Nacht-2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~WZS_SG16_Aussenansicht_Nacht-2.pdf",
    },
    {
      filename: "gru\u0308n mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~gru%CC%88n%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "neues Foto HN.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~neues%20Foto%20HN.pdf",
    },
    {
      filename: "orange mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~orange%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "pic_Dalia Menglinova.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~pic_Dalia%20Menglinova.pdf",
    },
    {
      filename: "pin_blau.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~pin_blau.pdf",
    },
    {
      filename: "pin_gru\u0308n.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~pin_gru%CC%88n.pdf",
    },
    {
      filename: "pin_orange.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~pin_orange.pdf",
    },
    {
      filename: "._230426_TUM_3in1_Bachelor_Altarfalz.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "._230426_TUM_3in1_Bachelor_Altarfalz.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~._230426_TUM_3in1_Bachelor_Altarfalz.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._1_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._1_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._220804_Heromotiv_mit_Botschaft_BMT2.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._220804_Heromotiv_mit_Botschaft_BMT2.pdf",
    },
    {
      filename: "._2_220608-TUM-foto-christiankasper-3493.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._2_220608-TUM-foto-christiankasper-3493.pdf",
    },
    {
      filename: "._BA_STR_2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BA_STR_2.pdf",
    },
    {
      filename: "._BMT Heilbronn.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BMT%20Heilbronn.pdf",
    },
    {
      filename: "._BMT_HN_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BMT_HN_qr-code.pdf",
    },
    {
      filename: "._BMT_MUC_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BMT_MUC_qr-code.pdf",
    },
    {
      filename: "._BSMT_SR_qr-code.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._BSMT_SR_qr-code.pdf",
    },
    {
      filename: "._Blau mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Blau%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._Foto Felix Rihacek.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto%20Felix%20Rihacek.pdf",
    },
    {
      filename: "._Foto Felix Rihacek_FG.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto%20Felix%20Rihacek_FG.pdf",
    },
    {
      filename: "._Foto Rebecca Steurer.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto%20Rebecca%20Steurer.pdf",
    },
    {
      filename: "._Foto_Claire Wall.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Foto_Claire%20Wall.pdf",
    },
    {
      filename: "._HG_Bachelor.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._HG_Bachelor.pdf",
    },
    {
      filename: "._IMG_9778 (1) (1).psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._IMG_9778%20%281%29%20%281%29.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._gru\u0308n mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._gru%CC%88n%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._orange mit Outline_CMYK.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._orange%20mit%20Outline_CMYK.pdf",
    },
    {
      filename: "._pic_Dalia Menglinova.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~__MACOSX~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner~Links~._pic_Dalia%20Menglinova.pdf",
    },
    {
      filename: "Druck_TUM_3in1_Bachelor_Altarfalz Ordner.zip",
      url: "https://tum.support/pdfs/Marketingmaterialien~Druck_TUM_3in1_Bachelor_Altarfalz%20Ordner.pdf",
    },
    {
      filename: "._230112_TUM_5in1_Master_Altarfalz.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~._230112_TUM_5in1_Master_Altarfalz.pdf",
    },
    {
      filename: "._230112_TUM_5in1_Master_Altarfalz.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~._230112_TUM_5in1_Master_Altarfalz.pdf",
    },
    {
      filename: "230112_TUM_5in1_Master_Altarfalz.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~230112_TUM_5in1_Master_Altarfalz.pdf",
    },
    {
      filename: "230112_TUM_5in1_Master_Altarfalz.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~230112_TUM_5in1_Master_Altarfalz.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "AdobeFnt23.lst",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Document%20fonts~AdobeFnt23.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Document%20fonts~TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Document%20fonts~TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Document%20fonts~TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._02_230110_Rottmueller_Marina_Color_CMYK.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._02_230110_Rottmueller_Marina_Color_CMYK.pdf",
    },
    {
      filename: "._02_ReynaldoValdezGarcia.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._02_ReynaldoValdezGarcia.pdf",
    },
    {
      filename: "._1_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._1_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-2099.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._220608-TUM-foto-christiankasper-2099.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-3120_Ekaterina Braun.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._220608-TUM-foto-christiankasper-3120_Ekaterina%20Braun.pdf",
    },
    {
      filename: "._FIM_schwarz.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._FIM_schwarz.pdf",
    },
    {
      filename: "._Martin_Schramm_MSMT.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._Martin_Schramm_MSMT.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._application_period.pdf",
    },
    {
      filename: "._duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._duration.pdf",
    },
    {
      filename: "._language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._language.pdf",
    },
    {
      filename: "._location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._location.pdf",
    },
    {
      filename: "._qr-code MCS.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._qr-code%20MCS.pdf",
    },
    {
      filename: "._qr-code MIM.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._qr-code%20MIM.pdf",
    },
    {
      filename: "._qr-code MMT.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._qr-code%20MMT.pdf",
    },
    {
      filename: "._qr-code MSMT.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~._qr-code%20MSMT.pdf",
    },
    {
      filename: "02_230110_Rottmueller_Marina_Color_CMYK.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~02_230110_Rottmueller_Marina_Color_CMYK.pdf",
    },
    {
      filename: "02_ReynaldoValdezGarcia.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~02_ReynaldoValdezGarcia.pdf",
    },
    {
      filename: "1_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~1_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "220608-TUM-foto-christiankasper-2099.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~220608-TUM-foto-christiankasper-2099.pdf",
    },
    {
      filename: "220608-TUM-foto-christiankasper-3120_Ekaterina Braun.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~220608-TUM-foto-christiankasper-3120_Ekaterina%20Braun.pdf",
    },
    {
      filename: "2_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~2_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "Akkreditierungslogos_schwarz-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~Akkreditierungslogos_schwarz-Print_03.pdf",
    },
    {
      filename: "Akkreditierungslogos_weiss-Print_03.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~Akkreditierungslogos_weiss-Print_03.pdf",
    },
    {
      filename: "Aula_am+BC_Versand.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~Aula_am%2BBC_Versand.pdf",
    },
    {
      filename: "FIM_schwarz.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~FIM_schwarz.pdf",
    },
    {
      filename: "Martin_Schramm_MSMT.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~Martin_Schramm_MSMT.pdf",
    },
    {
      filename: "TUM_SOM_Combi_white_EN_horizontal_CMYK.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~TUM_SOM_Combi_white_EN_horizontal_CMYK.pdf",
    },
    {
      filename: "Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "WZS_SG16_Aussenansicht_Nacht-2.jpg",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~WZS_SG16_Aussenansicht_Nacht-2.pdf",
    },
    {
      filename: "application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~application_period.pdf",
    },
    {
      filename: "duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~duration.pdf",
    },
    {
      filename: "language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~language.pdf",
    },
    {
      filename: "location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~location.pdf",
    },
    {
      filename: "qr-code MCS.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~qr-code%20MCS.pdf",
    },
    {
      filename: "qr-code MIM.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~qr-code%20MIM.pdf",
    },
    {
      filename: "qr-code MMT.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~qr-code%20MMT.pdf",
    },
    {
      filename: "qr-code MSMT.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~Final~Links~qr-code%20MSMT.pdf",
    },
    {
      filename: "._230112_TUM_5in1_Master_Altarfalz.idml",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~._230112_TUM_5in1_Master_Altarfalz.pdf",
    },
    {
      filename: "._230112_TUM_5in1_Master_Altarfalz.indd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~._230112_TUM_5in1_Master_Altarfalz.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Bold.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Document%20fonts~._TUMNeueHelvetica-Bold.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Italic.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Document%20fonts~._TUMNeueHelvetica-Italic.pdf",
    },
    {
      filename: "._TUMNeueHelvetica-Regular.ttf",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Document%20fonts~._TUMNeueHelvetica-Regular.pdf",
    },
    {
      filename: "._02_230110_Rottmueller_Marina_Color_CMYK.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._02_230110_Rottmueller_Marina_Color_CMYK.pdf",
    },
    {
      filename: "._02_ReynaldoValdezGarcia.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._02_ReynaldoValdezGarcia.pdf",
    },
    {
      filename: "._1_220609-TUM-foto-christiankasper-3038.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._1_220609-TUM-foto-christiankasper-3038.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-2099.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._220608-TUM-foto-christiankasper-2099.pdf",
    },
    {
      filename: "._220608-TUM-foto-christiankasper-3120_Ekaterina Braun.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._220608-TUM-foto-christiankasper-3120_Ekaterina%20Braun.pdf",
    },
    {
      filename: "._FIM_schwarz.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._FIM_schwarz.pdf",
    },
    {
      filename: "._Martin_Schramm_MSMT.psd",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._Martin_Schramm_MSMT.pdf",
    },
    {
      filename: "._Thirschturm_Andreas+Heddergott.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._Thirschturm_Andreas%2BHeddergott.pdf",
    },
    {
      filename: "._application_period.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._application_period.pdf",
    },
    {
      filename: "._duration.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._duration.pdf",
    },
    {
      filename: "._language.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._language.pdf",
    },
    {
      filename: "._location.png",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._location.pdf",
    },
    {
      filename: "._qr-code MCS.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._qr-code%20MCS.pdf",
    },
    {
      filename: "._qr-code MIM.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._qr-code%20MIM.pdf",
    },
    {
      filename: "._qr-code MMT.ai",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._qr-code%20MMT.pdf",
    },
    {
      filename: "._qr-code MSMT.eps",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer~__MACOSX~Final~Links~._qr-code%20MSMT.pdf",
    },
    {
      filename: "Offene Daten 5 in 1 Masterflyer.zip",
      url: "https://tum.support/pdfs/Marketingmaterialien~Offene%20Daten%205%20in%201%20Masterflyer.pdf",
    },
    {
      filename: "20230731_Freshers' Guide TUM School of Management_FIM.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Freshers%27%20Guides~20230731_Freshers%27%20Guide%20TUM%20School%20of%20Management_FIM.pdf",
    },
    {
      filename: "20231031_Freshers' Guide TUM School of Management_BMT.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Freshers%27%20Guides~20231031_Freshers%27%20Guide%20TUM%20School%20of%20Management_BMT.pdf",
    },
    {
      filename: "20231031_Freshers' Guide TUM School of Management_MCS.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Freshers%27%20Guides~20231031_Freshers%27%20Guide%20TUM%20School%20of%20Management_MCS.pdf",
    },
    {
      filename: "20231031_Freshers' Guide TUM School of Management_MMT.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Freshers%27%20Guides~20231031_Freshers%27%20Guide%20TUM%20School%20of%20Management_MMT.pdf",
    },
    {
      filename:
        "20231031_Freshers' Guide TUM School of Management_MiM_Munich.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Freshers%27%20Guides~20231031_Freshers%27%20Guide%20TUM%20School%20of%20Management_MiM_Munich.pdf",
    },
    {
      filename:
        "2023-10-10_MiM_WelcomeSession_WiSe_23-24_extended_version.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Info%20Sessions~2023-10-10_MiM_WelcomeSession_WiSe_23-24_extended_version.pdf",
    },
    {
      filename: "20231011_MMT_WelcomeSession_WS_23_long_version.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Info%20Sessions~20231011_MMT_WelcomeSession_WS_23_long_version.pdf",
    },
    {
      filename: "20231012_BMT Welcome Info Session_long version.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Info%20Sessions~20231012_BMT%20Welcome%20Info%20Session_long%20version.pdf",
    },
    {
      filename: "FIM_WelcomeSession_CB_Class of 2023.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Info%20Sessions~FIM_WelcomeSession_CB_Class%20of%202023.pdf",
    },
    {
      filename: "MCS_WelcomeSession_WS23_24_extended version.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Info%20Sessions~MCS_WelcomeSession_WS23_24_extended%20version.pdf",
    },
    {
      filename: "20230825_PPT_intro_master's students, vol. 2.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Webinar%20Curriculum%20Support~20230825_PPT_intro_master%27s%20students%2C%20vol.%202.pdf",
    },
    {
      filename: "20230926_Course Planning and Scheduling for BMT_WS2324.pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Webinar%20Curriculum%20Support~20230926_Course%20Planning%20and%20Scheduling%20for%20BMT_WS2324.pdf",
    },
    {
      filename: "20230918_Studying_at_TUM_SOM_WS23-24 (repetition).pptx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Webinar%20Studying%20at%20TUM%20School%20of%20Management~20230918_Studying_at_TUM_SOM_WS23-24%20%28repetition%29.pdf",
    },
    {
      filename: "20230918_Webinar_Text_WS23-24 (repetition).docx",
      url: "https://tum.support/pdfs/Materialien%20aus%20den%20Welcome-%20und%20Info-Sessions%20f%C3%BCr%20Erstsemester~Webinar%20Studying%20at%20TUM%20School%20of%20Management~20230918_Webinar_Text_WS23-24%20%28repetition%29.pdf",
    },
    {
      filename:
        "16_167_2021_Modulehandbook_Master's Program Finance and Information Management__20221118.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_167_2021_Modulehandbook_Master%27s%20Program%20Finance%20and%20Information%20Management__20221118.pdf",
    },
    {
      filename:
        "16_167_2021_Modulhandbuch_Masterstudiengang Finance and Information Management_20221118.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_167_2021_Modulhandbuch_Masterstudiengang%20Finance%20and%20Information%20Management_20221118.pdf",
    },
    {
      filename:
        "16_261_2022_Modulehandbook_Master's Program Management_Munich_20230927.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_261_2022_Modulehandbook_Master%27s%20Program%20Management_Munich_20230927.pdf",
    },
    {
      filename:
        "16_261_2022_Modulhandbuch_Masterstudiengang Management_M\u00fcnchen_20230927.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_261_2022_Modulhandbuch_Masterstudiengang%20Management_M%C3%BCnchen_20230927.pdf",
    },
    {
      filename:
        "16_267_2018_Modulehandbook_Masterstudiengang Management_&_Innovation_12251336.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_267_2018_Modulehandbook_Masterstudiengang%20Management_%26_Innovation_12251336.pdf",
    },
    {
      filename:
        "16_267_2018_Modulhandbuch_Masterstudiengang Management_&_Innovation_20220808085716.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_267_2018_Modulhandbuch_Masterstudiengang%20Management_%26_Innovation_20220808085716.pdf",
    },
    {
      filename:
        "16_268_2019_Modulehandbook_Master's Program Management_Heilbronn_20210729140605.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_268_2019_Modulehandbook_Master%27s%20Program%20Management_Heilbronn_20210729140605.pdf",
    },
    {
      filename:
        "16_268_2019_Modulhandbuch_Masterstudiengang Management_Heilbronn_20210729140444.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_268_2019_Modulhandbuch_Masterstudiengang%20Management_Heilbronn_20210729140444.pdf",
    },
    {
      filename:
        "16_274_2023_Modulehandbook_Master's Program Management and Technology_20230927.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_274_2023_Modulehandbook_Master%27s%20Program%20Management%20and%20Technology_20230927.pdf",
    },
    {
      filename:
        "16_274_2023_Modulhandbuch_Masterstudiengang Management and Technology_20230927.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_274_2023_Modulhandbuch_Masterstudiengang%20Management%20and%20Technology_20230927.pdf",
    },
    {
      filename:
        "16_766_2022_Modulehandbook_Master's Program Consumer Science_20230913.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_766_2022_Modulehandbook_Master%27s%20Program%20Consumer%20Science_20230913.pdf",
    },
    {
      filename:
        "16_766_2022_Modulhandbuch_Masterstudiengang Consumer_Science_20230913.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~16_766_2022_Modulhandbuch_Masterstudiengang%20Consumer_Science_20230913.pdf",
    },
    {
      filename:
        "17_247_2020_Modulehandbook_Bachelor_Management_and_Technology_(Heilbronn)_20230912.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~17_247_2020_Modulehandbook_Bachelor_Management_and_Technology_%28Heilbronn%29_20230912.pdf",
    },
    {
      filename:
        "17_247_2020_Modulhandbuch_Bachelorstudiengang_Management_and_Technology_(Heilbronn)_20230912.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~17_247_2020_Modulhandbuch_Bachelorstudiengang_Management_and_Technology_%28Heilbronn%29_20230912.pdf",
    },
    {
      filename:
        "17_274_2023_Modulehandbook_Bachelor_Management and Technology_20230912.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~17_274_2023_Modulehandbook_Bachelor_Management%20and%20Technology_20230912.pdf",
    },
    {
      filename:
        "17_274_2023_Modulhandbuch_Bachelor_Management and Technology_20230912.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~17_274_2023_Modulhandbuch_Bachelor_Management%20and%20Technology_20230912.pdf",
    },
    {
      filename:
        "Modulehandbook_MBA Executive Master of Business Administration in Business & IT.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~Modulehandbook_MBA%20Executive%20Master%20of%20Business%20Administration%20in%20Business%20%26%20IT.pdf",
    },
    {
      filename:
        "Modulehandbook_MBA Executive Master of Business Administration.pdf",
      url: "https://tum.support/pdfs/Modulhandb%C3%BCcher~Modulehandbook_MBA%20Executive%20Master%20of%20Business%20Administration.pdf",
    },
    {
      filename: "TUM MGT Chatbot Interviews.docx",
      url: "https://tum.support/pdfs/Studierendeninterviews~TUM%20MGT%20Chatbot%20Interviews.pdf",
    },
    {
      filename: "Study Programs of the TUM School of Management.docx",
      url: "https://tum.support/pdfs/Study%20Programs%20of%20the%20TUM%20School%20of%20Management.pdf",
    },
    {
      filename: "Infos.txt",
      url: "https://tum.support/pdfs/Success-Stories%20und%20Auslandsberichte%20unserer%20Studierenden~Infos.pdf",
    },
    {
      filename:
        "TUM SoM Student Service Kickoff Session - Redirects Overview  .docx",
      url: "https://tum.support/pdfs/TUM%20SoM%20Student%20Service%20Kickoff%20Session%20-%20Redirects%20Overview%20%20.pdf",
    },
    {
      filename: "usefull Links.txt",
      url: "https://tum.support/pdfs/usefull%20Links.pdf",
    },
  ],
};

export default Page;
