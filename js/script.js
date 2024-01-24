// Sidebar Js
window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

// plus minus quantity
const quantityWrappers = document.querySelectorAll(".quantity-wrapper");

quantityWrappers.forEach(wrapper => {
    const minus = wrapper.querySelector(".minus");
    const quantity = wrapper.querySelector(".quantity");
    const plus = wrapper.querySelector(".plus");

    minus.addEventListener("click", () => {
        const currentValue = parseInt(quantity.value);
        if(currentValue > 1){
            quantity.value = currentValue - 1;
        }
    });

    plus.addEventListener("click", () => {
        const currentValue = parseInt(quantity.value);
        if(currentValue < 10){
            quantity.value = currentValue + 1;
        }
    })
});

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
