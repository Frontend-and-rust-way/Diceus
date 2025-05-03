interface InsurancePolicy {
    line: string;
    policyNumber: string;
    effectiveDate: string;
    expirationDate: string;
    status: 'Active' | 'Pending';
    expiringTech: number;
    expiringPremium: number;
    renewalToTech: number;
    renewalTech: number;
    renewalPremium: number;
    rateChange: number | 'N/A';
    lossRatio: string | 'N/A';
  }
  
export const insurancePolicies: InsurancePolicy[] = [
    {
      line: 'Marine Cargo',
      policyNumber: '17030212',
      effectiveDate: '6/30/2026',
      expirationDate: '6/30/2027',
      status: 'Active',
      expiringTech: 587500,
      expiringPremium: 605000,
      renewalToTech: 610000,
      renewalTech: 620000,
      renewalPremium: 625000,
      rateChange: 3.3,
      lossRatio: '22%'
    },
    {
      line: 'General Liability',
      policyNumber: '4631092',
      effectiveDate: '6/30/2026',
      expirationDate: '6/30/2027',
      status: 'Active',
      expiringTech: 160000,
      expiringPremium: 165000,
      renewalToTech: 170000,
      renewalTech: 172500,
      renewalPremium: 175000,
      rateChange: 6.1,
      lossRatio: '55%'
    },
    {
      line: 'Workers Comp',
      policyNumber: '9182371',
      effectiveDate: 'Pending',
      expirationDate: 'Pending',
      status: 'Pending',
      expiringTech: 0,
      expiringPremium: 0,
      renewalToTech: 73500,
      renewalTech: 75000,
      renewalPremium: 75000,
      rateChange: 'N/A',
      lossRatio: 'N/A'
    },
    {
      line: 'Umbrella',
      policyNumber: '5274036',
      effectiveDate: '13/03/2026',
      expirationDate: '13/03/2027',
      status: 'Active',
      expiringTech: 245000,
      expiringPremium: 250000,
      renewalToTech: 267500,
      renewalTech: 270000,
      renewalPremium: 275000,
      rateChange: 10.0,
      lossRatio: '78%'
    }
  ];