import { NextResponse } from 'next/server';

// OWASP Top 10 2021 mapping via CWE
const CWE_TO_OWASP: Record<string, string> = {
  // A01 - Broken Access Control
  'CWE-22': 'A01:2021 - Broken Access Control',
  'CWE-23': 'A01:2021 - Broken Access Control',
  'CWE-59': 'A01:2021 - Broken Access Control',
  'CWE-200': 'A01:2021 - Broken Access Control',
  'CWE-201': 'A01:2021 - Broken Access Control',
  'CWE-219': 'A01:2021 - Broken Access Control',
  'CWE-264': 'A01:2021 - Broken Access Control',
  'CWE-275': 'A01:2021 - Broken Access Control',
  'CWE-276': 'A01:2021 - Broken Access Control',
  'CWE-284': 'A01:2021 - Broken Access Control',
  'CWE-285': 'A01:2021 - Broken Access Control',
  'CWE-352': 'A01:2021 - Broken Access Control',
  'CWE-359': 'A01:2021 - Broken Access Control',
  'CWE-377': 'A01:2021 - Broken Access Control',
  'CWE-402': 'A01:2021 - Broken Access Control',
  'CWE-425': 'A01:2021 - Broken Access Control',
  'CWE-441': 'A01:2021 - Broken Access Control',
  'CWE-497': 'A01:2021 - Broken Access Control',
  'CWE-538': 'A01:2021 - Broken Access Control',
  'CWE-540': 'A01:2021 - Broken Access Control',
  'CWE-548': 'A01:2021 - Broken Access Control',
  'CWE-552': 'A01:2021 - Broken Access Control',
  'CWE-566': 'A01:2021 - Broken Access Control',
  'CWE-601': 'A01:2021 - Broken Access Control',
  'CWE-639': 'A01:2021 - Broken Access Control',
  'CWE-651': 'A01:2021 - Broken Access Control',
  'CWE-668': 'A01:2021 - Broken Access Control',
  'CWE-706': 'A01:2021 - Broken Access Control',
  'CWE-862': 'A01:2021 - Broken Access Control',
  'CWE-863': 'A01:2021 - Broken Access Control',
  'CWE-913': 'A01:2021 - Broken Access Control',
  'CWE-922': 'A01:2021 - Broken Access Control',
  'CWE-1275': 'A01:2021 - Broken Access Control',

  // A02 - Cryptographic Failures
  'CWE-261': 'A02:2021 - Cryptographic Failures',
  'CWE-296': 'A02:2021 - Cryptographic Failures',
  'CWE-310': 'A02:2021 - Cryptographic Failures',
  'CWE-319': 'A02:2021 - Cryptographic Failures',
  'CWE-321': 'A02:2021 - Cryptographic Failures',
  'CWE-322': 'A02:2021 - Cryptographic Failures',
  'CWE-323': 'A02:2021 - Cryptographic Failures',
  'CWE-324': 'A02:2021 - Cryptographic Failures',
  'CWE-325': 'A02:2021 - Cryptographic Failures',
  'CWE-326': 'A02:2021 - Cryptographic Failures',
  'CWE-327': 'A02:2021 - Cryptographic Failures',
  'CWE-328': 'A02:2021 - Cryptographic Failures',
  'CWE-329': 'A02:2021 - Cryptographic Failures',
  'CWE-330': 'A02:2021 - Cryptographic Failures',
  'CWE-331': 'A02:2021 - Cryptographic Failures',
  'CWE-335': 'A02:2021 - Cryptographic Failures',
  'CWE-336': 'A02:2021 - Cryptographic Failures',
  'CWE-337': 'A02:2021 - Cryptographic Failures',
  'CWE-338': 'A02:2021 - Cryptographic Failures',
  'CWE-340': 'A02:2021 - Cryptographic Failures',
  'CWE-347': 'A02:2021 - Cryptographic Failures',
  'CWE-523': 'A02:2021 - Cryptographic Failures',
  'CWE-720': 'A02:2021 - Cryptographic Failures',
  'CWE-757': 'A02:2021 - Cryptographic Failures',
  'CWE-759': 'A02:2021 - Cryptographic Failures',
  'CWE-760': 'A02:2021 - Cryptographic Failures',
  'CWE-780': 'A02:2021 - Cryptographic Failures',
  'CWE-818': 'A02:2021 - Cryptographic Failures',
  'CWE-916': 'A02:2021 - Cryptographic Failures',

  // A03 - Injection
  'CWE-20': 'A03:2021 - Injection',
  'CWE-74': 'A03:2021 - Injection',
  'CWE-75': 'A03:2021 - Injection',
  'CWE-77': 'A03:2021 - Injection',
  'CWE-78': 'A03:2021 - Injection',
  'CWE-79': 'A03:2021 - Injection',
  'CWE-80': 'A03:2021 - Injection',
  'CWE-83': 'A03:2021 - Injection',
  'CWE-87': 'A03:2021 - Injection',
  'CWE-88': 'A03:2021 - Injection',
  'CWE-89': 'A03:2021 - Injection',
  'CWE-90': 'A03:2021 - Injection',
  'CWE-91': 'A03:2021 - Injection',
  'CWE-93': 'A03:2021 - Injection',
  'CWE-94': 'A03:2021 - Injection',
  'CWE-95': 'A03:2021 - Injection',
  'CWE-96': 'A03:2021 - Injection',
  'CWE-97': 'A03:2021 - Injection',
  'CWE-98': 'A03:2021 - Injection',
  'CWE-99': 'A03:2021 - Injection',
  'CWE-100': 'A03:2021 - Injection',
  'CWE-113': 'A03:2021 - Injection',
  'CWE-116': 'A03:2021 - Injection',
  'CWE-138': 'A03:2021 - Injection',
  'CWE-184': 'A03:2021 - Injection',
  'CWE-470': 'A03:2021 - Injection',
  'CWE-471': 'A03:2021 - Injection',
  'CWE-564': 'A03:2021 - Injection',
  'CWE-610': 'A03:2021 - Injection',
  'CWE-643': 'A03:2021 - Injection',
  'CWE-644': 'A03:2021 - Injection',
  'CWE-652': 'A03:2021 - Injection',
  'CWE-917': 'A03:2021 - Injection',

  // A04 - Insecure Design
  'CWE-73': 'A04:2021 - Insecure Design',
  'CWE-183': 'A04:2021 - Insecure Design',
  'CWE-209': 'A04:2021 - Insecure Design',
  'CWE-213': 'A04:2021 - Insecure Design',
  'CWE-235': 'A04:2021 - Insecure Design',
  'CWE-256': 'A04:2021 - Insecure Design',
  'CWE-257': 'A04:2021 - Insecure Design',
  'CWE-262': 'A04:2021 - Insecure Design',
  'CWE-263': 'A04:2021 - Insecure Design',
  'CWE-272': 'A04:2021 - Insecure Design',
  'CWE-311': 'A04:2021 - Insecure Design',
  'CWE-312': 'A04:2021 - Insecure Design',
  'CWE-313': 'A04:2021 - Insecure Design',
  'CWE-316': 'A04:2021 - Insecure Design',
  'CWE-419': 'A04:2021 - Insecure Design',
  'CWE-430': 'A04:2021 - Insecure Design',
  'CWE-434': 'A04:2021 - Insecure Design',
  'CWE-444': 'A04:2021 - Insecure Design',
  'CWE-451': 'A04:2021 - Insecure Design',
  'CWE-472': 'A04:2021 - Insecure Design',
  'CWE-501': 'A04:2021 - Insecure Design',
  'CWE-522': 'A04:2021 - Insecure Design',
  'CWE-525': 'A04:2021 - Insecure Design',
  'CWE-539': 'A04:2021 - Insecure Design',
  'CWE-579': 'A04:2021 - Insecure Design',
  'CWE-598': 'A04:2021 - Insecure Design',
  'CWE-602': 'A04:2021 - Insecure Design',
  'CWE-642': 'A04:2021 - Insecure Design',
  'CWE-646': 'A04:2021 - Insecure Design',
  'CWE-650': 'A04:2021 - Insecure Design',
  'CWE-653': 'A04:2021 - Insecure Design',
  'CWE-656': 'A04:2021 - Insecure Design',
  'CWE-657': 'A04:2021 - Insecure Design',
  'CWE-799': 'A04:2021 - Insecure Design',
  'CWE-807': 'A04:2021 - Insecure Design',
  'CWE-840': 'A04:2021 - Insecure Design',
  'CWE-841': 'A04:2021 - Insecure Design',
  'CWE-927': 'A04:2021 - Insecure Design',
  'CWE-1021': 'A04:2021 - Insecure Design',
  'CWE-1173': 'A04:2021 - Insecure Design',

  // A05 - Security Misconfiguration
  'CWE-2': 'A05:2021 - Security Misconfiguration',
  'CWE-11': 'A05:2021 - Security Misconfiguration',
  'CWE-13': 'A05:2021 - Security Misconfiguration',
  'CWE-15': 'A05:2021 - Security Misconfiguration',
  'CWE-16': 'A05:2021 - Security Misconfiguration',
  'CWE-260': 'A05:2021 - Security Misconfiguration',
  'CWE-315': 'A05:2021 - Security Misconfiguration',
  'CWE-520': 'A05:2021 - Security Misconfiguration',
  'CWE-526': 'A05:2021 - Security Misconfiguration',
  'CWE-537': 'A05:2021 - Security Misconfiguration',
  'CWE-541': 'A05:2021 - Security Misconfiguration',
  'CWE-547': 'A05:2021 - Security Misconfiguration',
  'CWE-611': 'A05:2021 - Security Misconfiguration',
  'CWE-614': 'A05:2021 - Security Misconfiguration',
  'CWE-756': 'A05:2021 - Security Misconfiguration',
  'CWE-776': 'A05:2021 - Security Misconfiguration',
  'CWE-942': 'A05:2021 - Security Misconfiguration',
  'CWE-1004': 'A05:2021 - Security Misconfiguration',
  'CWE-1032': 'A05:2021 - Security Misconfiguration',
  'CWE-1174': 'A05:2021 - Security Misconfiguration',

  // A06 - Vulnerable and Outdated Components
  'CWE-937': 'A06:2021 - Vulnerable & Outdated Components',
  'CWE-1035': 'A06:2021 - Vulnerable & Outdated Components',
  'CWE-1104': 'A06:2021 - Vulnerable & Outdated Components',

  // A07 - Identification and Authentication Failures
  'CWE-255': 'A07:2021 - Auth Failures',
  'CWE-259': 'A07:2021 - Auth Failures',
  'CWE-287': 'A07:2021 - Auth Failures',
  'CWE-288': 'A07:2021 - Auth Failures',
  'CWE-290': 'A07:2021 - Auth Failures',
  'CWE-294': 'A07:2021 - Auth Failures',
  'CWE-295': 'A07:2021 - Auth Failures',
  'CWE-297': 'A07:2021 - Auth Failures',
  'CWE-300': 'A07:2021 - Auth Failures',
  'CWE-302': 'A07:2021 - Auth Failures',
  'CWE-304': 'A07:2021 - Auth Failures',
  'CWE-306': 'A07:2021 - Auth Failures',
  'CWE-307': 'A07:2021 - Auth Failures',
  'CWE-346': 'A07:2021 - Auth Failures',
  'CWE-384': 'A07:2021 - Auth Failures',
  'CWE-521': 'A07:2021 - Auth Failures',
  'CWE-613': 'A07:2021 - Auth Failures',
  'CWE-620': 'A07:2021 - Auth Failures',
  'CWE-640': 'A07:2021 - Auth Failures',
  'CWE-798': 'A07:2021 - Auth Failures',
  'CWE-940': 'A07:2021 - Auth Failures',
  'CWE-1216': 'A07:2021 - Auth Failures',

  // A08 - Software and Data Integrity Failures
  'CWE-345': 'A08:2021 - Data Integrity Failures',
  'CWE-353': 'A08:2021 - Data Integrity Failures',
  'CWE-426': 'A08:2021 - Data Integrity Failures',
  'CWE-494': 'A08:2021 - Data Integrity Failures',
  'CWE-502': 'A08:2021 - Data Integrity Failures',
  'CWE-565': 'A08:2021 - Data Integrity Failures',
  'CWE-784': 'A08:2021 - Data Integrity Failures',
  'CWE-829': 'A08:2021 - Data Integrity Failures',
  'CWE-830': 'A08:2021 - Data Integrity Failures',
  'CWE-913': 'A08:2021 - Data Integrity Failures',

  // A09 - Security Logging and Monitoring Failures
  'CWE-117': 'A09:2021 - Logging Failures',
  'CWE-223': 'A09:2021 - Logging Failures',
  'CWE-532': 'A09:2021 - Logging Failures',
  'CWE-778': 'A09:2021 - Logging Failures',

  // A10 - Server-Side Request Forgery
  'CWE-918': 'A10:2021 - SSRF',
};

export interface ThreatEntry {
  cveID: string;
  vendorProject: string;
  product: string;
  vulnerabilityName: string;
  dateAdded: string;
  shortDescription: string;
  knownRansomwareCampaignUse: string;
  cwes: string[];
  owaspCategory: string;
  dueDate: string;
}

function mapToOwasp(cwes: string[]): string {
  for (const cwe of cwes) {
    const match = CWE_TO_OWASP[cwe];
    if (match) return match;
  }
  return 'Unclassified';
}

export async function GET() {
  try {
    const res = await fetch(
      'https://www.cisa.gov/sites/default/files/feeds/known_exploited_vulnerabilities.json',
      { next: { revalidate: 3600 } } // cache 1 hour
    );

    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch KEV catalog' }, { status: 502 });
    }

    const data = await res.json();
    const vulns = data.vulnerabilities as any[];

    // Sort by dateAdded descending, take top 10
    const recent = vulns
      .sort((a, b) => new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime())
      .slice(0, 10)
      .map((v): ThreatEntry => ({
        cveID: v.cveID,
        vendorProject: v.vendorProject,
        product: v.product,
        vulnerabilityName: v.vulnerabilityName,
        dateAdded: v.dateAdded,
        shortDescription: v.shortDescription,
        knownRansomwareCampaignUse: v.knownRansomwareCampaignUse,
        cwes: v.cwes ?? [],
        owaspCategory: mapToOwasp(v.cwes ?? []),
        dueDate: v.dueDate,
      }));

    // Build OWASP category summary counts across all KEV entries
    const categoryCounts: Record<string, number> = {};
    for (const v of vulns) {
      const cat = mapToOwasp(v.cwes ?? []);
      categoryCounts[cat] = (categoryCounts[cat] ?? 0) + 1;
    }

    return NextResponse.json({
      totalVulnerabilities: vulns.length,
      catalogVersion: data.catalogVersion,
      dateReleased: data.dateReleased,
      recent,
      categoryCounts,
    });
  } catch (err) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
