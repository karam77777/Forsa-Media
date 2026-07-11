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
    image: '', 
    video: '', 
    gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(168, 85, 247, 0.05))',
    ar: { cat: 'سوشيال ميديا', title: 'حملة منشورات مطعم بيت الشام' },
    en: { cat: 'Social Media', title: 'Beit El Sham Restaurant Campaign' }
  },
  {
    category: 'design',
    bg: '🎨',
    image: '',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.15), rgba(239, 68, 68, 0.05))',
    ar: { cat: 'تصميم جرافيك', title: 'هوية بصرية لشركة عقار مصر' },
    en: { cat: 'Graphic Design', title: 'Aqar Egypt Visual Identity' }
  },
  {
    category: 'print',
    bg: '🖨️',
    image: '',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(6, 182, 212, 0.05))',
    ar: { cat: 'طباعة ودعاية', title: 'بروشورات شركة النيل للخدمات' },
    en: { cat: 'Printing & Ads', title: 'Al Nile Services Brochure' }
  },
  {
    category: 'ads',
    bg: '📈',
    image: '',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15), rgba(239, 68, 68, 0.05))',
    ar: { cat: 'حملات إعلانية', title: 'حملة ترويجية لعيادة الشفاء' },
    en: { cat: 'Ad Campaigns', title: 'Al Shifa Clinic Ad Campaign' }
  },
  {
    category: 'social',
    bg: '💬',
    image: '',
    video: '',
    gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.05))',
    ar: { cat: 'سوشيال ميديا', title: 'إدارة صفحات شركة كارفور' },
    en: { cat: 'Social Media', title: 'Carrefour Social Media Management' }
  },
  {
    category: 'social',
    bg: '📐',
    gradient: 'linear-gradient(135deg, rgba(168, 85, 247, 0.15), rgba(236, 72, 153, 0.05))',
    ar: { cat: 'مونتاج ريلز', title: 'أعمال المونتاج والريلز' },
    en: { cat: 'Reels Montage', title: 'Reels & Montage Work' },
    media: [
      'Portfolio/Omar Azazy.mp4',
      'Portfolio/القيمه العادله (1).mp4',
      'Portfolio/الذهب 2.mp4',
      'Portfolio/القيمة العادلة (2).mp4',
      'Portfolio/العاطفة أخطر عدو للمستثمر.mp4',
    ]
  }
];
