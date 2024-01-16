import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { poppins } from "../Fonts"

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
]

export function Discoveries() {
  return (
    <div className=" flex flex-col place-self-center items-center gap-5 justify-center w-full h-[70vh] my-10">

  <div className={` text-text text-3xl font-bold`}>Discoveries & Solutions</div>
  <div className={`${poppins.className} w-[80%] h-[40vh]  rounded-lg overflow-auto`}>

    <Table >
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="uppercase text-md text-black bg-[#CAAAA6] rounded-t-md font-bold">
          <TableHead className="w-[100px]">Issue</TableHead>
          <TableHead>Community</TableHead>
          <TableHead>Problem Statement</TableHead>
          <TableHead >Digital Solution</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody >
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice} className="odd:bg-main/20 even:bg-[#CAAAA6] border-none">
            <TableCell className="font-medium">{invoice.invoice}</TableCell>
            <TableCell>{invoice.paymentStatus}</TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
    </Table>
  </div>
    </div>
  )
}