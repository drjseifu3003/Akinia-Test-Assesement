
export interface Contact {
  id: string;
  name?: string | null;
  role?: string | null;
  company?: Company | null;
  investor?: Investor | null;
  email?: string | null;
}

export interface Investor {
  id: string;
  name: string;
  type?: string | null;
  hq_location?: string | null;
  founded?: number | null;
  aum_m?: number | null;
  focus_sectors?: string | null;
  managing_director?: Contact | null;
  investor_portfolio_companies?: {company:Company}[] | null;
  funds?: Fund[] | null;
}

export interface Company {
  id: string;
  name: string;
  sector?: string | null;
  hq_location?: string | null;
  founded?: number | null;
  stage?: string | null;
  employees?: number | null;
  valuation_m?: number | null;
  ceo_contact_id?: string;
  primary_investor?: Investor | null;
}

export interface Fund {
  id: string;
  name?: string | null;
  fund_size_m?: number | null;
  vintage?: number | null;
  status?: string | null;
  investment_focus?: string | null;
  deployed_capital_m?: number | null;
  irr_percent?: number | null;
  investor?: Investor | null;
}

export interface News {
  id: string;
  title?: string | null;
  date?: string | null;
  sector?: string | null;
  source?: string | null;
  related_company?: Company | null;
  related_fund?: Fund | null;
}