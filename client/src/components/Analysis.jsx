import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const Analysis = () => {
    const [paymentData, setPaymentData] = useState();
    const [chartRendered, setChartRendered] = useState(false);

    const fetchTransactions = async () => {
        try {
            const response = await fetch('http://localhost:3000/account/transactions', {
                method: 'GET',
                headers: {
                    "auth-token": localStorage.getItem('jsonwebtoken')
                }
            });
            const data = await response.json();
            setPaymentData(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTransactions();
        if (paymentData && !chartRendered) {
            renderChart();
            setChartRendered(true);
        }
    }, [paymentData, chartRendered]);

    

    const renderChart = () => {
        const categories = ['food', 'travel', 'clothes', 'medicines'];
        const categoryTotals = calculateCategoryTotals(paymentData, categories);

        const ctx = document.getElementById('paymentChart');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: categories,
                datasets: [{
                    label: 'Payments by Category',
                    data: categories.map(category => categoryTotals[category]),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false
            }
        });
    };

    const calculateCategoryTotals = (data, categories) => {
        const categoryTotals = {};

        // Initialize category totals
        categories.forEach(category => {
            categoryTotals[category] = 0;
        });

        // Calculate category totals
        data.forEach(payment => {
            categoryTotals[payment.category] += payment.amount;
        });

        return categoryTotals;
    };

    return (
        <div>
            <h2>Payments by Category</h2>
            <canvas id="paymentChart" width="400" height="400"></canvas>
        </div>
    );
};

export default Analysis;
