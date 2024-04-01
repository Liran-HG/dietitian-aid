import {
  Table,
  TableCaption,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";
const headers = [
  {
    id: "weighing_date",
    displayName: "תאריך שקילה",
  },
  {
    id: "weighing_type",
    displayName: "סוג שקילה",
  },
  {
    id: "weight",
    displayName: "משקל (kg)",
  },
  {
    id: "bmi",
    displayName: "BMI",
  },
  {
    id: "body_fat",
    displayName: "שומן בגוף (%)",
  },
  {
    id: "visceral_fat",
    displayName: "שומן בטני",
  },
  {
    id: "bmr",
    displayName: "BMR",
  },
  {
    id: "heart_rate",
    displayName: "דופק",
  },
  {
    id: "body_water",
    displayName: "מים בגוף (%)",
  },
  {
    id: "muscle_mass",
    displayName: "מאסת שריר (kg)",
  },
  {
    id: "bone_mass",
    displayName: "מאסת עצם (kg)",
  },
  {
    id: "muscle_quality",
    displayName: "איכות שריר (%)",
  },
  {
    id: "physique_rating",
    displayName: "סוג מגנה גוף",
  },
  {
    id: "metabolic_age",
    displayName: "גיל מטבולי (שנים)",
  },
  {
    id: "body_fat_left_arm",
    displayName: "א.שומן - יד שמאל (%)",
  },
  {
    id: "body_fat_right_arm",
    displayName: "א.שומן - יד ימין (%)",
  },
  {
    id: "body_fat_left_leg",
    displayName: "א.שומן - רגל שמאל (%)",
  },
  {
    id: "body_fat_right_leg",
    displayName: "א.שומן - רגל ימין (%)",
  },
  {
    id: "body_fat_trunk",
    displayName: "א.שומן - גו (%)",
  },

  {
    id: "muscle_mass_left_arm",
    displayName: "מ.שריר - יד שמאל (kg)",
  },
  {
    id: "muscle_mass_right_arm",
    displayName: "מ.שריר - יד ימין (kg)",
  },
  {
    id: "muscle_mass_left_leg",
    displayName: "מ.שריר - רגל שמאל (kg)",
  },
  {
    id: "muscle_mass_right_leg",
    displayName: "מ.שריר - רגל ימין (kg)",
  },
  {
    id: "muscle_mass_trunk",
    displayName: "מ.שריר - גו (kg)",
  },

  {
    id: "muscle_quality_left_arm",
    displayName: "א.שריר - יד שמאל (%)",
  },
  {
    id: "muscle_quality_right_arm",
    displayName: "א.שריר - יד ימין (%)",
  },
  {
    id: "muscle_quality_left_leg",
    displayName: "א.שריר - רגל שמאל (%)",
  },
  {
    id: "muscle_quality_right_leg",
    displayName: "א.שריר - רגל ימין (%)",
  },
  {
    id: "muscle_quality_trunk",
    displayName: "א.שריר - גו (%)",
  },
];
const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
    totalAmount2: "$300.00",
    paymentMethod2: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
    totalAmount2: "$300.00",
    paymentMethod2: "Credit Card",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
    totalAmount2: "$300.00",
    paymentMethod2: "Credit Card",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
    totalAmount2: "$300.00",
    paymentMethod2: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
    totalAmount2: "$300.00",
    paymentMethod2: "Credit Card",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
    totalAmount2: "$300.00",
    paymentMethod2: "Credit Card",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
    totalAmount2: "$300.00",
    paymentMethod2: "Credit Card",
  },
];

export function WeighingHistoryTable() {
  return (
    <Table >
      {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
      <TableHeader>
        <TableRow className="bg-green-100">
          {headers.map((header) => (
            <TableHead
              key={header.id}
              className="text-right font-bold text-xs uppercase tracking-widest text-gray-500"
            >
              {header.displayName}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody >
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            {headers.map((header) => (
              <TableCell className="text-right">
                92.3
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
