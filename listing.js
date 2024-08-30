


    function showMinMaxMenu() {
        const priceDropdown = document.getElementById('priceDropdown');
        const minMaxDropdown = document.getElementById('minMaxDropdown');

        if (priceDropdown.value === 'price') {
            minMaxDropdown.style.display = 'inline-block';
        }
    }

    function showValues() {
        const minMaxDropdown = document.getElementById('minMaxDropdown');
        const valueList = document.getElementById('valueList');
        
        if (minMaxDropdown.value) {
            valueList.style.display = 'block';
            valueList.innerHTML = `<p>Selected Range: ${minMaxDropdown.value}</p>`;
        }
    }

    const slider = document.getElementById('slider');
    let scrollAmount = 0;
    const scrollStep = 200; // Adjust the scroll amount per click
    
    function slideLeft() {
      scrollAmount -= scrollStep;
      if (scrollAmount < 0) {
        scrollAmount = 0;
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
    
    function slideRight() {
      const maxScroll = slider.scrollWidth - slider.clientWidth;
      scrollAmount += scrollStep;
      if (scrollAmount > maxScroll) {
        scrollAmount = maxScroll;
      }
      slider.style.transform = `translateX(-${scrollAmount}px)`;
    }
    

    