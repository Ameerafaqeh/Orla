// -------------------------------------------
// ملف الجافاسكريبت الرئيسي لمشروع أورلا للإلكترونيات
// المسار: assets/js/main.js
// -------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
    console.log('Orla Electronics Front-End is running successfully.');

    // تعريف متغير لحفظ عدد المنتجات في السلة (مؤقت للاختبار)
    let cartCount = 0;
    const cartCountDisplay = document.getElementById('cart-count-display');

    // وظيفة لتحديث عدد المنتجات في الشريط العلوي
    function updateCartDisplay() {
        if (cartCountDisplay) {
            cartCountDisplay.textContent = cartCount;
        }
    }

    // إضافة مستمعي الأحداث لأزرار 'أضف للسلة'
    document.querySelectorAll('.btn-add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            cartCount++;
            updateCartDisplay();
            alert('تمت إضافة المنتج إلى السلة!');
        });
    });

    updateCartDisplay(); // تحديث العدد عند تحميل الصفحة
});