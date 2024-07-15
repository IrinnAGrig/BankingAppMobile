import { Component, AfterViewInit } from '@angular/core';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements AfterViewInit {
  private chart: Chart | undefined;
  private labels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
  private data = [20, 30, 50, 40, 60, 70];

  constructor() { }

  ngAfterViewInit(): void {
    this.createChart();
    this.createButtons();
  }

  private createChart(): void {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement;

    this.chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [{
          data: this.data,
          fill: true,
          backgroundColor: 'rgba(0, 102, 255, 0.2)',  // Add fill color with transparency
          borderColor: '#0066FF',  // Line color
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: '#0066FF'
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false  // Hide the legend
          }
        },
        scales: {
          x: {
            display: true,
            ticks: {
              padding: 10
            }
          },
          y: {
            display: false
          }
        }
      }
    });
  }

  private createButtons(): void {
    const buttonContainer = document.getElementById('chart-buttons');
    if (buttonContainer)
      buttonContainer.innerHTML = '';  // Clear previous buttons

    this.labels.forEach((label, index) => {
      const button = document.createElement('button');
      button.innerText = label;
      button.style.position = 'absolute';
      button.style.backgroundColor = '#0066FF';
      button.style.left = `${index * 50 + 20}px`;  // Adjust the button position
      button.style.top = '10px';

      button.onclick = () => this.updateChart(index);
      if (buttonContainer)
        buttonContainer.appendChild(button);
    });
  }

  private updateChart(index: number): void {
    if (this.chart) {
      this.chart.data.labels = [this.labels[index]];
      this.chart.data.datasets[0].data = [this.data[index]];
      this.chart.update();
    }

  }
}
