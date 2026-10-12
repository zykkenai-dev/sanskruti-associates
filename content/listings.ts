export type Listing={id:string;title:string;locality:string;type:string;purpose:'Buy'|'Rent'|'Enquire';image:string;price?:number;bhk?:number;context?:string;source?:string};
export const listings:Listing[]=[
{id:'SA-001',title:'Goel Ganga Arcadia',locality:'Kharadi–Mundhwa Bypass',type:'Flat',purpose:'Buy',image:'residential-1',price:10000000,context:'₹1.0 Cr was shown in the supplied Housing.com research. Current price and availability need confirmation.',source:'https://housing.com/in/buy/projects/page/217717-goel-ganga-arcadia-by-goel-ganga-group-in-kharadi'},
{id:'SA-002',title:"Gera’s Planet of Joy",locality:'Upper Kharadi',type:'Flat',purpose:'Enquire',image:'residential-2'},
{id:'SA-003',title:'Gulmohar City',locality:'Kharadi',type:'Flat',purpose:'Enquire',image:'residential-3',context:'Research records a 1/2/3 BHK project range; specific units are unconfirmed.'},
{id:'SA-004',title:'Prasun Sarvam',locality:'Kharadi',type:'Flat',purpose:'Enquire',image:'residential-2',context:'Project-level context: 2 BHK, approximately 640 sq ft carpet. This is not a confirmed available unit.'},
{id:'SA-005',title:'Mahalaxmi Zen Estate',locality:'Kharadi',type:'Flat',purpose:'Enquire',image:'residential-1'},
{id:'SA-006',title:'Venkatesh Laxmi Fortune Plaza',locality:'Kharadi',type:'Flat',purpose:'Enquire',image:'commercial'},
{id:'SA-007',title:'Saakaar Silvana',locality:'Kharadi',type:'Flat',purpose:'Enquire',image:'residential-3'},
{id:'SA-008',title:'Kumar Primavera B6',locality:'Wadgaon Sheri',type:'Flat',purpose:'Enquire',image:'residential-2'},
{id:'SA-009',title:'Vilas Javdekar Yashwin Orizzonte',locality:'Kharadi',type:'Flat',purpose:'Enquire',image:'residential-1'},
{id:'SA-010',title:'Kalyani Nagar river-view homes',locality:'Kalyani Nagar',type:'Flat',purpose:'Enquire',image:'residential-3',context:'Past promotion referenced 3 & 4 BHK homes. Project and unit details need confirmation.'},
{id:'SA-011',title:'Prime residential plots',locality:'To confirm',type:'Plot',purpose:'Enquire',image:'land',context:'Past promotion: 11,000 sq ft plots and 80-ft road frontage. The old “4 plots left” claim is not current inventory.'},
{id:'SA-012',title:'Showroom / ATM space',locality:'Kharadi',type:'Showroom',purpose:'Enquire',image:'commercial',context:'Service-category example; no specific available commercial unit is confirmed.'}
];
export type Filters={purpose:string;type:string;locality:string;bhk:string;budget:number;sort:string;savedOnly?:boolean;saved?:string[]};
export function filterListings(items:Listing[],f:Filters){return items.filter(x=>(f.purpose==='All'||x.purpose===f.purpose)&&(f.type==='All'||x.type===f.type)&&(f.locality==='All'||x.locality===f.locality)&&(f.bhk==='All'||x.bhk===Number(f.bhk))&&(f.budget===0||(x.price!==undefined&&x.price<=f.budget))&&(!f.savedOnly||f.saved?.includes(x.id))).sort((a,b)=>f.sort==='price-up'?(a.price??Infinity)-(b.price??Infinity):f.sort==='price-down'?(b.price??-Infinity)-(a.price??-Infinity):a.id.localeCompare(b.id));}
