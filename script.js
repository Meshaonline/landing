document.addEventListener('DOMContentLoaded', () => {
    const toggleBalance = document.getElementById('toggle-balance');
    const balanceAmount = document.getElementById('balance-amount');
    let balanceVisible = true;
    const originalBalance = balanceAmount.textContent;

    toggleBalance.addEventListener('click', () => {
        if (balanceVisible) {
            balanceAmount.textContent = '₦******.**';
            toggleBalance.textContent = 'visibility_off';
        } else {
            balanceAmount.textContent = originalBalance;
            toggleBalance.textContent = 'visibility';
        }
        balanceVisible = !balanceVisible;
    });

    // Add alerts for other buttons to simulate functionality
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        if (!button.classList.contains('fund-button') && !button.classList.contains('pay-now-button') && !button.classList.contains('view-button')) return;
        
        button.addEventListener('click', (e) => {
            let message = '';
            if (e.target.classList.contains('fund-button')) {
                message = 'Fund Account clicked!';
            } else if (e.target.classList.contains('pay-now-button')) {
                message = 'Pay Now clicked!';
            } else if (e.target.classList.contains('view-button')) {
                message = 'View clicked!';
            }
            if(message) alert(message);
        });
    });

    const actionItems = document.querySelectorAll('.action-item');
    actionItems.forEach(item => {
        item.addEventListener('click', () => {
            const actionText = item.querySelector('p').textContent;
            alert(`${actionText} clicked!`);
        });
    });
});
