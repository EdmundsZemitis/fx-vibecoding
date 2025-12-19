# Stock Dashboard

A beautiful, mobile-responsive stock dashboard application built with React. Features real-time stock information display with interactive charts and key financial metrics.

![Stock Dashboard](https://img.shields.io/badge/React-18.2.0-blue) ![Responsive](https://img.shields.io/badge/Mobile-Responsive-green) ![Status](https://img.shields.io/badge/Status-Active-success)

## 🚀 Features

- **Mobile-First Design** - Fully responsive layout for all screen sizes
- **Interactive Price Chart** - SVG-based visualization with smooth animations
- **Real-time Stock Data** - Currently displays NVDA with dummy data (ready for API integration)
- **Modern UI/UX** - Dark theme with glassmorphism effects and smooth transitions
- **Key Financial Metrics** - P/E ratio, market cap, volume, margins, and more

## 📱 Screenshots

The dashboard adapts beautifully across devices:
- **Desktop**: Two-column layout with detailed metrics sidebar
- **Tablet**: Single column layout with optimized spacing
- **Mobile**: Condensed layout with touch-friendly interactions

## 🛠️ Built With

- **React 18.2.0** - Frontend framework
- **CSS3** - Custom responsive styling with CSS Grid/Flexbox
- **SVG** - Interactive charts and visualizations
- **Inter Font** - Modern typography

## 📦 Project Structure

```
src/
├── components/
│   ├── StockDashboard.js    # Main dashboard container
│   ├── StockCard.js         # Stock price and info display
│   ├── StockMetrics.js      # Financial metrics grid
│   └── PriceChart.js        # Interactive price chart
├── data/
│   └── nvda-stock.json      # Dummy stock data
└── styles/                  # Component-specific CSS files
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EdmundsZemitis/fx-vibecoding.git
cd fx-vibecoding
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open http://localhost:3000 in your browser

## 🔧 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

## 🔮 Future Enhancements

- [ ] Integration with real stock API (Alpha Vantage, Yahoo Finance, etc.)
- [ ] Multiple stock watchlist support
- [ ] Historical data with different time ranges
- [ ] Dark/light theme toggle
- [ ] Portfolio tracking functionality
- [ ] Real-time WebSocket updates
- [ ] Stock search and filtering
- [ ] Technical indicators overlay

## 📊 Sample Data

Currently using dummy data for NVIDIA (NVDA) including:
- Current price and daily changes
- 7-day price history
- Key financial metrics
- Market cap and trading volume

## 🎨 Design Features

- **Responsive Breakpoints**: 480px, 768px, 1024px
- **Color Scheme**: Dark gradient theme with accent colors
- **Typography**: Inter font family for clean, modern text
- **Animations**: Smooth transitions and hover effects
- **Glassmorphism**: Modern glass-like UI elements

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Edmunds Zemitis**
- GitHub: [@EdmundsZemitis](https://github.com/EdmundsZemitis)

---

⭐ Star this repository if you found it helpful!