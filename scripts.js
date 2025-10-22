document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // 클릭된 헤더의 다음 요소(콘텐츠)를 찾습니다.
            const content = this.nextElementSibling;
            
            // 현재 헤더의 active 클래스를 토글합니다.
            this.classList.toggle('active');

            // 콘텐츠의 높이를 조절하여 열고 닫습니다.
            if (content.style.maxHeight) {
                // 이미 열려있다면 닫습니다.
                content.style.maxHeight = null;
                content.style.padding = '0 15px'; // 닫힐 때 패딩 제거
            } else {
                // 닫혀있다면 엽니다.
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.padding = '15px'; // 열릴 때 패딩 추가
            }
        });
    });
});
