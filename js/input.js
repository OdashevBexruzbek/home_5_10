const name_ = document.getElementById('name_').value.toLowerCase();
const narxi = parseInt(document.getElementById('narxi_').value);
const status = document.getElementById('status_').value;

function filterPhone() {
    let filtrlangan = phones.filter(phone => 
        (phone.name.toLowerCase().includes(name_) || name_ === '') &&
        (isNaN(narxi) || phone.price <= narxi) &&
        (status === '' || phone.status === status)
    );

    display_phone(filtrlangan);
}

function display_phone(phoneList) {
    let phoneListElement = document.getElementById('phoneList');
    phoneListElement.innerHTML = '';

    phoneList.forEach(phone => {
        let li = document.createElement('li');
        li.textContent = `${phone.name} - Narxi: $${phone.price} - Holati: ${phone.status}`;
        phoneListElement.appendChild(li);
    });
}

document.getElementById('filterButton').addEventListener('click', filterPhone);
display_phone(phones);

export {filterPhone, display_phone}