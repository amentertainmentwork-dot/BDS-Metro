export interface LeadTarget {
  id: string;
  alias: string; // "Shark X", "Distressed F0"
  profileType: 'WHALE' | 'PANICKED_SELLER' | 'CASH_HEDGER';
  netWorthEstimate: string;
  leverageRatio: string; // "High", "Low", "N/A"
  lastSignal: string; // "Vừa bán 200k cổ phiếu", "Đến hạn đáo nợ ngân hàng"
  locationFocus: string;
  urgency: number; // 0-100
  status: 'TRACKING' | 'CONTACTED' | 'CLOSING';
  vulnerability: string; // "Interest Rate Hike", "Divorce", "Bankruptcy"
}

export interface ProjectCaseStudy {
  id: string;
  codeName: string;
  headline: string;
  tags: string[];
  status: 'active' | 'sold' | 'locked';
  imageUrl: string;
  priceZone: string;
  roiProjected: string;
  verdict?: 'RUN' | 'BUY' | 'WAIT' | 'NEUTRAL';
  content?: string;
}

export interface NewsTickerItem {
  id: string;
  text: string;
}

export interface HeatmapZone {
  id: string;
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  growthPotential: number;
  description: string;
  currentPrice: string;
  projectedROI: string;
  daysOnMarket: number;
}

export interface IntelArticle {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: 'MACRO' | 'POLICY' | 'INFRASTRUCTURE' | 'FORENSIC';
  content?: string;
}