
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableFooter } from "@/components/ui/table";
import { Mail, Phone, Globe, Calendar, FileText, Package, CheckCircle, DollarSign } from 'lucide-react';

const Index = () => {
  const reportDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const clientComponents = [
    "ESP32 Camera - 1",
    "DFmini Player with SD Card - 1", 
    "16 ohm's 0.5 W Speaker - 2",
    "Joy stick sensor - 1",
    "7-12 V Supply - 1",
    "Jumper Wires",
    "Resistors",
    "LED - 6",
    "Tactile Button - 1",
    "DC Motor - 1",
    "FTDI CONVERTER - 1",
    "Small Breadboard - 1",
    "Type A USB - 1",
    "HW Battery"
  ];

  const usedFromClient = [
    "DFmini Player with SD Card",
    "Speaker"
  ];

  const companyPurchases = [
    { item: "ESP32 CAM", quantity: 2, rate: 975, total: 1950 },
    { item: "FTDI Converter", quantity: 2, rate: 260, total: 520 },
    { item: "ESP32 Devkit", quantity: 1, rate: 480, total: 480 },
    { item: "BreadBoard Large", quantity: 1, rate: 120, total: 120 },
    { item: "Aluminium single stranded wires", quantity: 1, rate: 40, total: 40 },
    { item: "Micro USB to C converter", quantity: 1, rate: 80, total: 80 },
    { item: "Objects for detection", quantity: 5, rate: 72, total: 360 }
  ];

  const additionalCharges = [
    { item: "Roboflow credits for model training", amount: 4000, note: "49$ converted to INR" },
    { item: "Circuit diagram document preparation", amount: 500, note: "Technical documentation" }
  ];

  const componentsCost = companyPurchases.reduce((sum, item) => sum + item.total, 0);
  const additionalCost = additionalCharges.reduce((sum, item) => sum + item.amount, 0);
  const totalProjectCost = componentsCost + additionalCost;
  const clientPaidAmount = 9500;
  const overBudgetAmount = totalProjectCost - clientPaidAmount;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-2 sm:p-4 print:bg-white print:p-0">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sm:p-8 print:bg-blue-900">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div className="flex-1">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">Nexus Data Solutions</h1>
              <div className="space-y-1 text-blue-100 text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">www.nexusdatasolution.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span className="break-all">ismail@nexusdatasolution.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+91-7032229659</span>
                </div>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <Badge variant="secondary" className="bg-white text-blue-900 text-base sm:text-lg px-3 sm:px-4 py-2 mb-2">
                PROJECT COST REPORT
              </Badge>
              <div className="text-sm text-blue-100">
                <div>Date: {reportDate}</div>
                <div>Project: ESP32 Detection System</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Project Component Analysis & Cost Breakdown
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Comprehensive report detailing all components received, utilized, and procured for the project
            </p>
          </div>

          {/* Components Received from Client */}
          <Card className="mb-6 border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-800 text-lg sm:text-xl">
                <Package className="w-5 h-5" />
                Components Received from Client
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {clientComponents.map((component, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-green-700">
                    <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0" />
                    <span>{component}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Components Used from Client */}
          <Card className="mb-6 border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-blue-800 text-lg sm:text-xl">
                <CheckCircle className="w-5 h-5" />
                Components Used from Client Inventory
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {usedFromClient.map((component, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-blue-700">
                    <CheckCircle className="w-3 h-3 text-blue-500 flex-shrink-0" />
                    <span>{component}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Company Purchases */}
          <Card className="mb-6 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800 text-lg sm:text-xl">
                <DollarSign className="w-5 h-5" />
                Components Purchased by Company
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-orange-800">Component</TableHead>
                      <TableHead className="text-center text-orange-800">Qty</TableHead>
                      <TableHead className="text-right text-orange-800">Rate (₹)</TableHead>
                      <TableHead className="text-right text-orange-800">Total (₹)</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {companyPurchases.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.item}</TableCell>
                        <TableCell className="text-center">{item.quantity}</TableCell>
                        <TableCell className="text-right">₹{item.rate}</TableCell>
                        <TableCell className="text-right font-semibold">₹{item.total}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TableCell className="font-bold text-orange-800" colSpan={3}>Components Subtotal</TableCell>
                      <TableCell className="text-right font-bold text-orange-800">₹{componentsCost}</TableCell>
                    </TableRow>
                  </TableFooter>
                </Table>
              </div>
            </CardContent>
          </Card>

          {/* Additional Charges */}
          <Card className="mb-6 border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-purple-800 text-lg sm:text-xl">
                <FileText className="w-5 h-5" />
                Additional Charges
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {additionalCharges.map((charge, index) => (
                  <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 bg-white rounded-lg border border-purple-200">
                    <div>
                      <div className="font-medium text-gray-900">{charge.item}</div>
                      <div className="text-sm text-gray-600">{charge.note}</div>
                    </div>
                    <div className="font-bold text-purple-600 mt-2 sm:mt-0">₹{charge.amount}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Summary */}
          <div className="space-y-4 mb-6 sm:mb-8">
            {/* Total Project Cost */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg p-4 sm:p-6">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Total Project Cost</h3>
                <div className="text-3xl sm:text-4xl font-bold">₹{totalProjectCost.toLocaleString('en-IN')}</div>
                <div className="text-sm sm:text-base text-blue-100 mt-2">
                  Components: ₹{componentsCost} + Additional Charges: ₹{additionalCost}
                </div>
              </div>
            </div>

            {/* Payment Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-green-100 border border-green-300 rounded-lg p-4">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-green-800 mb-2">Amount Paid by Client</h4>
                  <div className="text-2xl font-bold text-green-700">₹{clientPaidAmount.toLocaleString('en-IN')}</div>
                </div>
              </div>
              <div className="bg-red-100 border border-red-300 rounded-lg p-4">
                <div className="text-center">
                  <h4 className="text-lg font-semibold text-red-800 mb-2">Over Budget Amount</h4>
                  <div className="text-2xl font-bold text-red-700">₹{overBudgetAmount.toLocaleString('en-IN')}</div>
                  <div className="text-sm text-red-600 mt-1">Remaining to be paid</div>
                </div>
              </div>
            </div>
          </div>

          {/* Project Summary */}
          <Card className="mb-6 border-gray-200">
            <CardHeader>
              <CardTitle className="text-gray-800 text-lg sm:text-xl">Project Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-600 min-w-[20px]">•</span>
                  <span>Successfully utilized client-provided components including DFmini Player and Speaker system</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-600 min-w-[20px]">•</span>
                  <span>Procured additional ESP32 components and development tools for enhanced functionality</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-600 min-w-[20px]">•</span>
                  <span>Integrated advanced object detection capabilities using Roboflow AI model training</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-600 min-w-[20px]">•</span>
                  <span>Delivered comprehensive technical documentation including detailed circuit diagrams</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="font-bold text-gray-600 min-w-[20px]">•</span>
                  <span>Project exceeded initial budget due to enhanced AI capabilities and additional components required</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-8 print:hidden">
            <Button onClick={handlePrint} className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Print Report
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="w-4 h-4 mr-2" />
              Email Report
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 sm:mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
            <p>This report provides a comprehensive breakdown of all project-related components and costs.</p>
            <p className="mt-1">All components were carefully selected and procured to ensure optimal project performance and reliability.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
