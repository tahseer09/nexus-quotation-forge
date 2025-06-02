
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe, Calendar, CreditCard, Shield, Database, Monitor, Settings, Server, CheckCircle } from 'lucide-react';

const Index = () => {
  const quotationDate = new Date().toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const validUntil = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  const services = [
    {
      icon: <Monitor className="w-6 h-6 text-blue-600" />,
      title: "Frontend Development",
      price: 32000,
      description: "Complete user interface development with modern technologies",
      features: [
        "Custom-designed, responsive homepage with modern UI/UX",
        "Interactive product listing page with filtering and sorting",
        "Detailed product pages with images, descriptions, and reviews",
        "Seamless shopping cart functionality",
        "Streamlined checkout process with form validation",
        "Order confirmation page with email notifications"
      ]
    },
    {
      icon: <Database className="w-6 h-6 text-green-600" />,
      title: "Backend Development",
      price: 25000,
      description: "Robust server-side architecture and database management",
      features: [
        "Robust database setup for products, orders, and customer data",
        "Efficient order flow management with status tracking",
        "Advanced inventory management system integrated with admin panel",
        "API development for seamless frontend-backend communication"
      ]
    },
    {
      icon: <Settings className="w-6 h-6 text-purple-600" />,
      title: "Admin Panel",
      price: 28000,
      description: "Comprehensive administrative interface and management tools",
      features: [
        "Secure admin login with two-factor authentication",
        "Comprehensive product management (add/edit/delete 1000+ products)",
        "Order management dashboard with search and filter capabilities",
        "Real-time delivery status updates and notifications"
      ]
    },
    {
      icon: <CreditCard className="w-6 h-6 text-orange-600" />,
      title: "Payment Gateway Integration",
      price: 12000,
      description: "Secure payment processing with multiple payment options",
      features: [
        "Cash on Delivery (COD) with order verification",
        "Secure card payment integration via Razorpay",
        "Support for multiple payment methods with error handling"
      ]
    },
    {
      icon: <Server className="w-6 h-6 text-red-600" />,
      title: "Domain & Hosting Setup",
      price: 3000,
      description: "Complete deployment and hosting configuration",
      features: [
        "Domain purchase and DNS configuration",
        "Hosting setup with optimized platforms (Vercel, Hostinger, or equivalent)",
        "SSL certificate for secure browsing"
      ]
    }
  ];

  const totalCost = services.reduce((sum, service) => sum + service.price, 0);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4 print:bg-white print:p-0">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden print:shadow-none print:rounded-none">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-8 print:bg-blue-900">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">Nexus Data Solutions</h1>
              <div className="space-y-1 text-blue-100">
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>www.nexusdatasolution.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>ismail@nexusdatasolution.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+91-7032229659</span>
                </div>
              </div>
            </div>
            <div className="text-right">
              <Badge variant="secondary" className="bg-white text-blue-900 text-lg px-4 py-2 mb-2">
                QUOTATION
              </Badge>
              <div className="text-sm text-blue-100">
                <div>Date: {quotationDate}</div>
                <div>Valid Until: {validUntil}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Service Breakdown
            </h2>
            <p className="text-gray-600">
              Comprehensive e-commerce platform development with modern features and robust architecture
            </p>
          </div>

          {/* Services Table */}
          <div className="overflow-hidden rounded-lg border border-gray-200 mb-8">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Service Category</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 border-b">Description & Features</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 border-b">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {services.map((service, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-6 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        {service.icon}
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{service.title}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-6">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className="px-6 py-6 text-right">
                      <span className="text-lg font-bold text-gray-900">₹{service.price.toLocaleString('en-IN')}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Total Amount */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center text-2xl font-bold text-blue-700">
              <span>Total Amount</span>
              <span>₹{totalCost.toLocaleString('en-IN')}</span>
            </div>
          </div>

          {/* Terms and Conditions */}
          <Card className="mt-8 border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Shield className="w-5 h-5" />
                Terms and Conditions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 min-w-[20px]">1.</span>
                  <span>Project timeline: Approximately 8-10 weeks from confirmation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 min-w-[20px]">2.</span>
                  <span>Payment terms: 50% advance, 25% upon completion of frontend and backend, 25% on final delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 min-w-[20px]">3.</span>
                  <span>Minor changes and maintenance will be provided free of charge for up to 6 months post-delivery.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 min-w-[20px]">4.</span>
                  <span>Any additional features or major changes beyond the scope will incur extra charges.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-orange-600 min-w-[20px]">5.</span>
                  <span>Quotation is valid for 30 days from the issue date.</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8 print:hidden">
            <Button onClick={handlePrint} className="flex-1 bg-blue-600 hover:bg-blue-700">
              <Calendar className="w-4 h-4 mr-2" />
              Print Quotation
            </Button>
            <Button variant="outline" className="flex-1">
              <Mail className="w-4 h-4 mr-2" />
              Email Quotation
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-8 pt-6 border-t border-gray-200 text-sm text-gray-600">
            <p>Thank you for considering Nexus Data Solutions for your web development needs.</p>
            <p className="mt-1">We look forward to bringing your vision to life with cutting-edge technology and exceptional service.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
