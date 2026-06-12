document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('usersTableBody');
    const noDataMessage = document.getElementById('noDataMessage');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.length === 0) {
        noDataMessage.classList.remove('d-none');
    } else {
        users.forEach((user, index) => {
            const tr = document.createElement('tr');
            
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td>${user.name}</td>
                <td><span class="badge bg-secondary">${user.placa}</span></td>
                <td>${user.phone}</td>
                <td>${user.date}</td>
            `;
            
            tableBody.appendChild(tr);
        });
    }
});