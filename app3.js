function discountVoucher(){
    const getDiscountBtn = document.querySelector(".get-discount-btn");
const couponContainer = document.querySelector(".coupon-container");
const closeBtn = document.querySelector(".coupon-container .close");

console.log(getDiscountBtn);
getDiscountBtn.addEventListener("click", () => {
    couponContainer.classList.add("active");
});
closeBtn.addEventListener("click", () => {
    couponContainer.classList.remove("active");
})
}

discountVoucher()