/**
 * =========================================================================
 *                   معرض أعمال فرصة ميديا - دليل التحكم اليدوي
 * =========================================================================
 * 
 * يمكنك إضافة وتعديل أعمالك هنا بسهولة تامة وبشكل يدوي.
 * 
 * طريقة إضافة عمل جديد:
 * 1. ضع صورك أو فيديوهاتك في مجلد المشروع (مثلاً يمكنك إنشاء مجلد جديد باسم Portfolio وتضع الصور والفيديوهات فيه).
 * 2. انسخ أحد العناصر بالأسفل وكرره.
 * 3. قم بتعديل الخصائص كالتالي:
 *    - category: التصنيف. الخيارات المتاحة هي:
 *        * 'social' -> تصاميم سوشيال ميديا
 *        * 'design' -> مشاريع هوية بصرية
 *        * 'print'  -> تصاميم مطبوعة
 *        * 'ads'    -> حملات إعلانية
 *    - bg: الإيموجي الافتراضي (يظهر فقط إذا لم تقم بتحديد صورة أو فيديو).
 *    - image: مسار الصورة (مثال: 'Portfolio/work1.jpg'). اتركها فارغة '' إذا كنت تريد استخدام فيديو أو إيموجي فقط.
 *    - video: مسار ملف الفيديو (مثال: 'Portfolio/reel1.mp4'). اتركها فارغة '' إذا كان العمل عبارة عن صورة فقط.
 *    - gradient: لون الخلفية المتدرجة للبطاقة (يظهر تحت الصورة/الإيموجي).
 *    - ar: الاسم والتصنيف باللغة العربية.
 *    - en: الاسم والتصنيف باللغة الإنجليزية.
 */

const portfolioData = [
  {
    category: 'social',
    bg: '📱',
    image: 'Portfolio/3- غلاف قسم السوشيال ميديا.jpg', 
    video: '', 
    media: [
      'Portfolio/Social/0.jpeg',
      'Portfolio/Social/1.jpeg',
      'Portfolio/Social/2.jpeg',
      'Portfolio/Social/3.jpeg',
      'Portfolio/Social/4.jpeg',
      'Portfolio/Social/5.jpg',
      'Portfolio/Social/6.jpeg',
      'Portfolio/Social/7.jpeg',
      'Portfolio/Social/8.jpg',
      'Portfolio/Social/9.jpeg',
      'Portfolio/Social/10.jpeg',
      'Portfolio/Social/11.jpg',
      'Portfolio/Social/12.jpeg',
      'Portfolio/Social/13.jpg',
      'Portfolio/Social/14.jpeg',
      'Portfolio/Social/15.jpg',
      'Portfolio/Social/16.jpeg',
      'Portfolio/Social/17.jpg',
      'Portfolio/Social/18.jpeg',
      'Portfolio/Social/19.jpg',
      'Portfolio/Social/20.jpg',
      'Portfolio/Social/21.jpg',
      'Portfolio/Social/22.jpg'
    ],
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.05))',
    ar: { cat: 'سوشيال ميديا', title: 'تصميمات بوستات سوشيال ميديا' },
    en: { cat: 'Social Media', title: 'Social media Post Designs' }
  },
  {
    category: 'design',
    bg: '🎨',
    image: 'Portfolio/2- غلاف قسم الهوية البصرية.jpg',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(239, 68, 68, 0.05))',
    ar: { cat: 'هويات بصرية', title: 'بعض من أعمالنا في الهويات البصرية' },
    en: { cat: 'Visual Identity', title: 'Some of our work in visual identity' },
    media: [
      'Portfolio/visual identity/Egychem visual identity.jpg',
      'Portfolio/visual identity/Money Talk.jpg',
      'Portfolio/visual identity/NABD AL MUASHIR.jpg',
      'Portfolio/visual identity/Aladdin identity.jpg'
    ]
  },
  {
    category: 'print',
    bg: '🖨️',
    image: 'Portfolio/1- غلاف قسم الطباعة.jpg',
    video: '',
    media: [
      'Portfolio/Print/1- ايجي كيم 1.jpg',
      'Portfolio/Print/1- ايجي كيم 1.mp4',
      'Portfolio/Print/2- طاهر ستيل.jpg',
      'Portfolio/Print/3- عربية أون لاين 1.jpg',
      'Portfolio/Print/3- عربية أون لاين 1.mp4',
      'Portfolio/Print/4- ايجي كيم 3.jpg',
      'Portfolio/Print/4- ايجي كيم 3.mp4',
      'Portfolio/Print/5- البورصجية.jpg',
      'Portfolio/Print/5- البورصجية.mp4',
      'Portfolio/Print/6- ايجي كيم 2.jpg',
      'Portfolio/Print/7- عربية أون لاين 2.jpg',
      'Portfolio/Print/7- عربية أون لاين 2.mp4',
      'Portfolio/Print/8- بنرات.jpg',
      'Portfolio/Print/8- بنرات.mp4',
      'Portfolio/Print/9- توزيعات كتب كتاب.jpg',
      'Portfolio/Print/9- توزيعات كتب كتاب.mp4',
      'Portfolio/Print/10- مينيو برمبو.jpg',
      'Portfolio/Print/10- مينيو برمبو.mp4',
      'Portfolio/Print/11- برجر 999.jpg',
      'Portfolio/Print/11- برجر 999.mp4'
    ],
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.05))',
    ar: { cat: 'طباعة ودعاية', title: 'مطبوعات بكل انواعها' },
    en: { cat: 'Printing & Ads', title: 'Printed materials' }
  },
  {
    category: 'ads',
    bg: '📈',
    image: 'Portfolio/6- غلاف قسم الاعلانات.jpg',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.05))',
    ar: { cat: 'حملات إعلانية', title: 'نتائج اعلانات مموله' },
    en: { cat: 'Ad Campaigns', title: 'Sponsored Ad Results' },
    media: [
      'Portfolio/ADs/0-نم نم.jpg',
      'Portfolio/ADs/00-الخواجة.jpg',
      'Portfolio/ADs/1- رمانة (1).jpg',
      'Portfolio/ADs/1- رمانة (2).jpg',
      'Portfolio/ADs/1- رمانة (3).jpg',
      'Portfolio/ADs/1- رمانة (4).jpg',
      'Portfolio/ADs/1- رمانة (5).jpg',
      'Portfolio/ADs/1- رمانة (6).jpg',
      'Portfolio/ADs/1- رمانة (7).jpg',
      'Portfolio/ADs/1- رمانة (8).jpg',
      'Portfolio/ADs/1- رمانة (9).jpg',
      'Portfolio/ADs/2- احلى ستور (1).jpg',
      'Portfolio/ADs/2- احلى ستور (2).jpg',
      'Portfolio/ADs/2- احلى ستور (3).jpg',
      'Portfolio/ADs/2- احلى ستور (4).jpg',
      'Portfolio/ADs/2- احلى ستور (5).jpg',
      'Portfolio/ADs/3- اعلان مطبعة كيان (1).jpg',
      'Portfolio/ADs/3- اعلان مطبعة كيان (2).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (1).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (2).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (3).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (4).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (5).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (6).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (7).jpg',
      'Portfolio/ADs/4- اعلان احلي ستور (8).jpg',
      'Portfolio/ADs/5- اعلان رمانه (1).jpg',
      'Portfolio/ADs/5- اعلان رمانه (2).jpg',
      'Portfolio/ADs/5- اعلان رمانه (3).jpg',
      'Portfolio/ADs/5- اعلان رمانه (4).jpg',
      'Portfolio/ADs/5- اعلان رمانه (5).jpg',
      'Portfolio/ADs/5- اعلان رمانه (6).jpg',
      'Portfolio/ADs/5- اعلان رمانه (7).jpg',
      'Portfolio/ADs/5- اعلان رمانه (8).jpg',
      'Portfolio/ADs/5- اعلان رمانه (9).jpg',
      'Portfolio/ADs/5- اعلان رمانه (10).jpg'
    ]
  },
  {
    category: 'design',
    bg: '💬',
    image: 'Portfolio/5- غلاف قسم تصميم الجرافي.jpg',
    video: '',
    media: [
      'Portfolio/Desgien/1- دسباسيتو 1 (1).jpg',
      'Portfolio/Desgien/1- دسباسيتو 1 (2).jpg',
      'Portfolio/Desgien/1- دسباسيتو 1 (3).mp4',
      'Portfolio/Desgien/2- بودي.jpg',
      'Portfolio/Desgien/2- بودي.mp4',
      'Portfolio/Desgien/3- قشطوطة.jpg',
      'Portfolio/Desgien/3- قشطوطة.mp4',
      'Portfolio/Desgien/4- السلام.jpg',
      'Portfolio/Desgien/5- أدوية.jpg',
      'Portfolio/Desgien/6- تصميمات اخرى.jpg',
      'Portfolio/Desgien/7- فلاير 2 (1).jpg',
      'Portfolio/Desgien/7- فلاير 2 (2).jpg',
      'Portfolio/Desgien/8- بروشور 1 (1).jpg',
      'Portfolio/Desgien/8- بروشور 1 (2).jpg',
      'Portfolio/Desgien/9- ملازم 4 (1).jpg',
      'Portfolio/Desgien/9- ملازم 4 (2).jpg',
      'Portfolio/Desgien/9- ملازم 4 (3).jpg',
      'Portfolio/Desgien/9- ملازم 4 (4).jpg',
      'Portfolio/Desgien/10- بلوك نوت 1 (1).jpg',
      'Portfolio/Desgien/10- بلوك نوت 1 (2).jpg',
      'Portfolio/Desgien/11- نتائج.jpg',
      'Portfolio/Desgien/12- رول اب.jpg',
      'Portfolio/Desgien/13- بنرات.jpg'
    ],
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.05))',
    ar: { cat: 'تصميم الجرافيك', title: 'تصميمات بجميع انواعها' },
    en: { cat: 'Graphic Designs', title: 'Designs of all kinds' }
  },
  {
    category: 'videos',
    bg: '📐',
    image: 'Portfolio/4- غلاف قسم الفيديو ايديتنج.jpg',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.05))',
    ar: { cat: 'مونتاج ريلز', title: 'أعمال المونتاج والريلز' },
    en: { cat: 'Reels Montage', title: 'Reels & Montage Work' },
    media: [
      { cover: 'Portfolio/Reels/Cover/100ج تكفي تبدأ محفظة استثمارية ناجحة.jpg', video: 'Portfolio/Reels/100ج تكفي تبدأ محفظة استثمارية ناجحة.mp4' },
      { cover: 'Portfolio/Reels/Cover/5 أخطاء في البورصة.jpg', video: 'Portfolio/Reels/5 أخطاء في البورصة.mp4' },
      { cover: 'Portfolio/Reels/Cover/الأسهم الاسلامية الجزء الـ1.jpg', video: 'Portfolio/Reels/الأسهم الاسلامية الجزء الـ1.mp4' },
      { cover: 'Portfolio/Reels/Cover/الأسهم الاسلامية الجزء الـ2.jpg', video: 'Portfolio/Reels/الأسهم الاسلامية الجزء الـ2.mp4' },
      { cover: 'Portfolio/Reels/Cover/الذهب 2.jpg', video: 'Portfolio/Reels/الذهب 2.mp4' },
      { cover: 'Portfolio/Reels/Cover/العاطفة أخطر عدو للمستثمر.jpeg', video: 'Portfolio/Reels/العاطفة أخطر عدو للمستثمر.mp4' },
      { cover: 'Portfolio/Reels/Cover/القيمه العادله (1).jpg', video: 'Portfolio/Reels/القيمه العادله (1).mp4' },
      { cover: 'Portfolio/Reels/Cover/القيمة العادلة (2).png', video: 'Portfolio/Reels/القيمة العادلة (2).mp4' },
      { cover: 'Portfolio/Reels/Cover/القيمة العادلة (3).jpg', video: 'Portfolio/Reels/القيمة العادلة (3).mp4' },
      { cover: 'Portfolio/Reels/Cover/القيمة العادلة (4).jpg', video: 'Portfolio/Reels/القيمة العادلة (4).mp4' },
      { cover: 'Portfolio/Reels/Cover/شهادة الـ18.jpg', video: 'Portfolio/Reels/شهادة الـ18.mp4' },
      { cover: 'Portfolio/Reels/Cover/قصه بشمهندس احمد.jpg', video: 'Portfolio/Reels/قصه بشمهندس احمد.mp4' },
      { cover: 'Portfolio/Reels/Cover/يعني اية توزيعات ارباح او كوبونات.jpg', video: 'Portfolio/Reels/يعني اية توزيعات ارباح او كوبونات.mp4' }
    ]
  }
];
