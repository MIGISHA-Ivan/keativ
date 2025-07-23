import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for individuals and small creators getting started',
      features: [
        '3 social accounts',
        '10 scheduled posts per month',
        'Basic analytics',
        'Email support',
        'Mobile app access'
      ],
      limitations: [
        'Limited to 1 user',
        'Basic templates only'
      ],
      buttonText: 'Start Free',
      buttonVariant: 'outline' as const,
      popular: false
    },
    {
      name: 'Professional',
      price: '$29',
      period: 'per month',
      description: 'For growing businesses and marketing teams',
      features: [
        'Unlimited social accounts',
        'Unlimited scheduled posts',
        'Advanced analytics & reports',
        'Team collaboration (5 users)',
        'Priority support',
        'Custom branding',
        'Bulk upload & scheduling',
        'Hashtag suggestions',
        'Best time to post insights'
      ],
      buttonText: 'Start 14-Day Trial',
      buttonVariant: 'default' as const,
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: 'per month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Unlimited team members',
        'White-label solution',
        'Advanced security (SSO, 2FA)',
        'Custom integrations',
        'Dedicated account manager',
        'Advanced approval workflows',
        'Custom analytics dashboard',
        '24/7 phone support'
      ],
      buttonText: 'Contact Sales',
      buttonVariant: 'outline' as const,
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Can I change plans anytime?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and are prorated.'
    },
    {
      question: 'Is there a setup fee?',
      answer: 'No setup fees. You only pay the monthly subscription fee for your chosen plan.'
    },
    {
      question: 'Do you offer refunds?',
      answer: 'We offer a 30-day money-back guarantee on all paid plans. No questions asked.'
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Simple, Transparent
            <span className="text-red-500"> Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose the plan that fits your needs. Start free and scale as you grow. 
            No hidden fees, no commitments.
          </p>
          <div className="inline-flex items-center bg-green-100 text-green-800 text-sm font-medium px-4 py-2 rounded-full">
            <span>🎉 14-day free trial on all paid plans</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-sm hover:shadow-lg transition-shadow ${
                plan.popular ? 'ring-2 ring-red-500 shadow-lg' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-500 text-white px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600 mt-2">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-500 ml-1">/{plan.period}</span>
                    )}
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    
                    {plan.limitations && plan.limitations.map((limitation, i) => (
                      <div key={i} className="flex items-center space-x-3 opacity-60">
                        <div className="h-5 w-5 flex-shrink-0 flex items-center justify-center">
                          <div className="h-1 w-3 bg-gray-300 rounded"></div>
                        </div>
                        <span className="text-sm text-gray-500">{limitation}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/signup" className="block">
                    <Button 
                      className={`w-full ${
                        plan.popular 
                          ? 'bg-red-500 hover:bg-red-600 text-white' 
                          : ''
                      }`}
                      variant={plan.buttonVariant}
                    >
                      {plan.buttonText}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-600">
              See what's included in each plan
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-medium text-gray-900">Features</th>
                    <th className="px-6 py-4 text-center font-medium text-gray-900">Starter</th>
                    <th className="px-6 py-4 text-center font-medium text-gray-900">Professional</th>
                    <th className="px-6 py-4 text-center font-medium text-gray-900">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { feature: 'Social Accounts', starter: '3', pro: 'Unlimited', enterprise: 'Unlimited' },
                    { feature: 'Team Members', starter: '1', pro: '5', enterprise: 'Unlimited' },
                    { feature: 'Scheduled Posts', starter: '10/month', pro: 'Unlimited', enterprise: 'Unlimited' },
                    { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom Dashboard' },
                    { feature: 'Support', starter: 'Email', pro: 'Priority', enterprise: '24/7 Phone' }
                  ].map((row, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">{row.starter}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">{row.pro}</td>
                      <td className="px-6 py-4 text-sm text-center text-gray-700">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-8">
                <h3 className="font-heading text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-red-500 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-red-100 mb-8">
            Join thousands of businesses already using Zenith to grow their social media presence.
          </p>
          <Link to="/signup">
            <Button size="lg" className="bg-white text-red-500 hover:bg-gray-100 px-8 py-3">
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Pricing;