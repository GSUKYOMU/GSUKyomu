document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header-adjust');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            
            this.classList.toggle('active');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                // padding-top과 padding-bottom을 0으로 설정하여 완전히 닫히게 함
                content.style.paddingTop = '0';
                content.style.paddingBottom = '0';
            } else {
                // 열릴 때 content의 높이를 설정하고 padding을 부여
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.paddingTop = '20px';
                content.style.paddingBottom = '20px';
            }
        });
    });
});
