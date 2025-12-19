
import { ProjectCaseStudy, NewsTickerItem, HeatmapZone, IntelArticle, LeadTarget } from './types.ts';

// Added SHARK_SIGNALS to resolve import error in SharkMonitorPage.tsx
export const SHARK_SIGNALS = [
  {
    id: 'S-001',
    time: '10:45 AM',
    type: 'LIQUIDATION',
    target: 'QUỸ ĐẤT LONG PHƯỚC',
    msg: 'Phát hiện giao dịch bán sỉ 50 nền đất dưới giá thị trường 25% từ một chủ đầu tư đang gặp áp lực nợ trái phiếu.'
  },
  {
    id: 'S-002',
    time: '09:12 AM',
    type: 'ACCUMULATION',
    target: 'SOUTH CAN GIO',
    msg: 'Một nhóm nhà đầu tư Hà Nội vừa hoàn tất thu mua 12ha đất nuôi tôm tại Cần Thạnh, chờ thông tin cầu Cần Giờ.'
  },
  {
    id: 'S-003',
    time: 'YESTERDAY',
    type: 'INSIDER MOVES',
    target: 'METRO LINE 1 HUB',
    msg: 'Lãnh đạo một tập đoàn đa ngành vừa thoái vốn 200 tỷ tại mảng bán lẻ, chuẩn bị gom hàng ngộp tại khu Đông.'
  }
];

export const LEAD_TARGETS: LeadTarget[] = [
  {
    id: 'T-001',
    alias: "LÃNH ĐẠO CẤP CAO X",
    profileType: 'WHALE',
    netWorthEstimate: ">500B",
    leverageRatio: "LOW",
    vulnerability: "Legacy Preservation",
    lastSignal: "Vừa thoái vốn khỏi mảng sản xuất, đang dư 200 tỷ tiền mặt mặt tìm đất nền ven biển.",
    locationFocus: "CẦN GIỜ / HỒ TRÀM",
    urgency: 40,
    status: 'TRACKING'
  },
  {
    id: 'T-002',
    alias: "NHÀ ĐẦU TƯ F0 (ORIGAMI)",
    profileType: 'PANICKED_SELLER',
    netWorthEstimate: "5B - 10B",
    leverageRatio: "CRITICAL (85%)",
    vulnerability: "Interest Rate Shock",
    lastSignal: "Lãi suất thả nổi vừa vọt lên 13.5%, nợ gốc quá hạn 30 ngày. Cần thoát hàng ngay để trả nợ.",
    locationFocus: "VINHOMES GRAND PARK",
    urgency: 95,
    status: 'CLOSING'
  },
  {
    id: 'T-003',
    alias: "HỘI KIỀU HỐI MỸ",
    profileType: 'CASH_HEDGER',
    netWorthEstimate: "20B - 50B",
    leverageRatio: "NONE",
    vulnerability: "VND Depreciation",
    lastSignal: "Đang lo ngại tỷ giá USD/VND biến động, muốn đổ tiền vào tài sản thực tại Quận 2.",
    locationFocus: "THỦ THIÊM / AN PHÚ",
    urgency: 70,
    status: 'CONTACTED'
  },
  {
    id: 'T-004',
    alias: "ĐẠI GIA SÀI GÒN (HÀNG NGỘP)",
    profileType: 'PANICKED_SELLER',
    netWorthEstimate: "150B",
    leverageRatio: "HIGH",
    vulnerability: "Margin Call",
    lastSignal: "Tài khoản chứng khoán bị giải chấp, cần thanh lý 3 căn biệt thự Thảo Điền trong 48h.",
    locationFocus: "QUẬN 2 / THẢO ĐIỀN",
    urgency: 100,
    status: 'TRACKING'
  }
];

export const TICKER_ITEMS: NewsTickerItem[] = [
  { id: '1', text: "TARGET ALERT: PHÁT HIỆN LÀN SÓNG CẮT LỖ TẠI PHÂN KHU THE BEVERLY - CƠ HỘI ÉP GIÁ" },
  { id: '2', text: "WHALE WATCH: MỘT TỔ CHỨC TÀI CHÍNH VỪA RÚT 500 TỶ KHỎI TRÁI PHIẾU - ĐANG TÌM QUỸ ĐẤT" },
  { id: '3', text: "FORENSIC: DỰ ÁN X (COMPETITOR) - PHÁT HIỆN LỖ HỔNG PHÁP LÝ QUỸ ĐẤT CÔNG" },
  { id: '4', text: "VÀNH ĐAI 3: LƯU LƯỢNG XE TẢI TĂNG 15% - LOGISTICS HUB POTENTIAL CONFIRMED" },
];

export const METRO_INDEX_SUMMARY = [
  { name: "Metro Line 1 Index", value: "47,951.85", change: "+65.88", percent: "0.14%", color: "text-emerald-400" },
  { name: "Land Value Index (HCMC)", value: "6,774.76", change: "+53.33", percent: "0.79%", color: "text-emerald-400" },
  { name: "Leverage Index (Debt)", value: "23,006.36", change: "-313.04", percent: "1.38%", color: "text-red-400" },
];

export const HOT_PROJECTS = [
  { id: "VGP", symbol: "VGP", name: "Vinhomes Grand Park", price: "55.81", change: "+0.19", percent: "3.49%", volume: "192M", rangeMin: "45.2", rangeMax: "72.4", currentPos: 0.35 },
  { id: "TTA", symbol: "TTA", name: "The Metropole Thu Thiem", price: "174.14", change: "+3.20", percent: "1.87%", volume: "176M", rangeMin: "150.0", rangeMax: "212.1", currentPos: 0.65 },
  { id: "ZGC", symbol: "ZGC", name: "Zeitgeist City", price: "85.26", change: "-0.10", percent: "4.63%", volume: "122M", rangeMin: "60.0", rangeMax: "95.5", currentPos: 0.85 },
];

export const ECONOMIC_CALENDAR = [
  { time: "8:30 AM", event: "Phê duyệt Quy hoạch 1/500 Cần Giờ", impact: "High", forecast: "Approved", actual: "--" },
  { time: "10:00 AM", event: "Họp báo tiến độ Metro Line 2", impact: "Medium", forecast: "2026 Start", actual: "2027 Delay" },
];

export const HEATMAP_ZONES: HeatmapZone[] = [
  { id: 'z9', name: 'Q9 - VINHOMES GP', riskLevel: 'high', growthPotential: 30, description: "Nguồn cung 44.000 căn đè bẹp giá thuê. Hạ tầng kẹt xe nghiêm trọng đến 2026.", currentPrice: "52.5M", projectedROI: "-8.4%", daysOnMarket: 142 },
  { id: 'z2', name: 'THỦ THIÊM / AN PHÚ', riskLevel: 'medium', growthPotential: 65, description: "Giá đã cao nhưng hạ tầng hoàn thiện. Dòng tiền cho thuê ổn định từ chuyên gia.", currentPrice: "185.0M", projectedROI: "+12.2%", daysOnMarket: 45 },
  { id: 'cg', name: 'CẦN GIỜ', riskLevel: 'low', growthPotential: 95, description: "Đất nền sơ khai chờ cầu Cần Giờ & Vingroup lấn biển. Lợi nhuận đột biến nếu nắm giữ >5 năm.", currentPrice: "22.8M", projectedROI: "+45.0%", daysOnMarket: 88 },
];

export const INTEL_ARTICLES: IntelArticle[] = [
  { id: 'a1', title: "FORENSIC ZONE 4: LÒ MỔ TÀI CHÍNH & THUẾ IQ", summary: "Tại sao mua sơ cấp Origami đắt hơn thứ cấp 20%?", date: "TODAY", category: "FORENSIC" },
  { id: 'a2', title: "SHARK WATCH: DÒNG TIỀN KIỀU HỐI ĐANG ĐỔ VỀ ĐÂU?", summary: "Phân tích luồng tiền từ nhóm khách hàng VIP nước ngoài.", date: "TODAY", category: "MACRO" },
];

export const CASE_STUDIES: ProjectCaseStudy[] = [
  {
    id: 'VHGP-99',
    codeName: "VINHOMES GRAND PARK",
    headline: "HỒ SƠ PHÁP Y: CỖ MÁY IN TIỀN HAY LÒ MỔ TÀI CHÍNH?",
    tags: ["DISTRESSED", "LEVERAGE TRAP", "TARGETED"],
    status: 'active',
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1000&auto=format&fit=crop", 
    priceZone: "ZONE 9 - LONG BÌNH",
    roiProjected: "-16.6TR / MONTH",
    verdict: 'WAIT',
    content: "Full audit content here..."
  },
  {
    id: 'GS-ZEIT',
    codeName: "ZEITGEIST CITY",
    headline: "THÀNH TRÌ CUỐI CÙNG CỦA NHÀ BÈ - ĐIỂM RƠI LỢI NHUẬN",
    tags: ["HIGH YIELD", "LANDED PROP", "SHARK FAVORITE"],