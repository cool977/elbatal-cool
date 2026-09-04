const products=[
{name:"Carrier Optimax 1.5 حصان",brand:"Carrier",type:"بارد / ساخن",price:"26,500 جنيه",image:"https://f.nooncdn.com/p/pnsku/N53228888A/45/_/1764242080/0cc18aa5-0a29-419f-ab71-3b641e518409.jpg"},
{name:"Midea Mission Pro 1.5 حصان",brand:"Midea",type:"بارد / ساخن",price:"22,999 جنيه",image:"https://e-motion-cdn.fra1.cdn.digitaloceanspaces.com/product/5654/bw1kTURV3hY35CDn7MZyQDHVkgyAwYN4VBPpLEX3-1000x1000.jpg?v=-1"},
{name:"Carrier Optimax 2.25 حصان",brand:"Carrier",type:"بارد فقط",price:"37,190 جنيه",image:"https://f.nooncdn.com/p/pzsku/Z309DE4117D0ABA7D56A9Z/45/1745847224/7c43b4a0-c888-4364-9c78-6b935f8c2dd5.jpg"},
{name:"Midea Mission Pro 2.25 حصان",brand:"Midea",type:"بارد فقط",price:"31,399 جنيه",image:"https://f.nooncdn.com/p/pzsku/Z843462EDCF4D43B58373Z/45/_/1778592039/6a2eb4c2-867c-4dd9-985b-936d51844496.jpg"}];

const services=[
["❄️","تركيب التكييف","تركيب احترافي وتجهيز الجهاز للعمل بكفاءة.","السعر حسب المعاينة"],
["🛠️","صيانة التكييف","كشف الأعطال وإصلاحها بأيدي فنيين متخصصين.","السعر حسب الحالة"],
["🧹","تنظيف التكييف","تنظيف شامل للوحدة لتحسين الأداء.","السعر حسب الجهاز"],
["💨","شحن فريون","فحص التسريب وشحن الفريون المناسب.","السعر حسب الحالة"],
["🔧","فك وتركيب","فك الجهاز وإعادة تركيبه في مكان آخر.","السعر حسب المعاينة"],
["🔍","كشف أعطال","فحص الجهاز وتحديد سبب العطل.","السعر حسب الحالة"]];

const wa="201225151794";

function renderProducts(list=products){
 const el=document.querySelector("#productsGrid");
 el.innerHTML=list.map(p=>`<article class="card">
   <div class="product-img"><img src="${p.image}" alt="${p.name}" loading="lazy"></div>
   <div class="meta">${p.brand} · ${p.type}</div>
   <h3>${p.name}</h3>
   <div class="price">${p.price}</div>
   <a class="btn whatsapp" target="_blank" rel="noopener" href="https://wa.me/${wa}?text=${encodeURIComponent("مرحبًا، أريد الاستفسار عن "+p.name)}>اطلب على واتساب</a>
 </article>`).join("")||"<p>لا توجد نتائج.</p>";
}

document.querySelector("#search").addEventListener("input",e=>{
 const q=e.target.value.trim().toLowerCase();
 renderProducts(products.filter(p=>(p.name+" "+p.brand+" "+p.type).toLowerCase().includes(q)))
});

document.querySelector("#servicesGrid").innerHTML=services.map(s=>`<article class="card">
 <div class="service-icon">${s[0]}</div><h3>${s[1]}</h3><p class="meta">${s[2]}</p>
 <div class="price" style="font-size:17px">${s[3]}</div>
 <a class="btn primary" target="_blank" rel="noopener" href="https://wa.me/${wa}?text=${encodeURIComponent("مرحبًا، أريد الاستفسار عن خدمة "+s[1])}">اطلب الخدمة</a>
 </article>`).join("");

renderProducts();

document.querySelector(".menu-btn").addEventListener("click",()=>{
 document.querySelector("#mainNav").classList.toggle("open")
});
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>{
 document.querySelector("#mainNav").classList.remove("open")
}));
