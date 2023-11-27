document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box => {
        box.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.5s';
        });

        box.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });

        box.addEventListener('click', function() {
            alert('Ürün detaylar!');
            
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const box1s = document.querySelectorAll('.box1');

    box1s.forEach(box1 => {
        box1.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.5s';
        });

        box1.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });

        box1.addEventListener('click', function() {
            alert('Kampanya detaylar');
            
        });
    });
});
