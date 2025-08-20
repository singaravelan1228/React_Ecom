import React, { useState } from 'react';
import './EcommerceFilter.css';

const EcommerceFilter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    price: true,
    brand: true,
    rating: true
  });

  const [filters, setFilters] = useState({
    categories: [],
    priceRange: [0, 1000],
    brands: [],
    rating: 0
  });

  const categories = [
    'Electronics',
    'Clothing',
    'Home & Garden',
    'Sports',
    'Books',
    'Beauty',
    'Automotive',
    'Toys'
  ];

  const brands = [
    'Apple',
    'Samsung',
    'Nike',
    'Adidas',
    'Sony',
    'LG',
    'Canon',
    'HP'
  ];

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleCategoryChange = (category) => {
    setFilters(prev => ({
      ...prev,
      categories: prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category]
    }));
  };

  const handleBrandChange = (brand) => {
    setFilters(prev => ({
      ...prev,
      brands: prev.brands.includes(brand)
        ? prev.brands.filter(b => b !== brand)
        : [...prev.brands, brand]
    }));
  };

  const handlePriceChange = (value, type) => {
    setFilters(prev => ({
      ...prev,
      priceRange: type === 'min' 
        ? [parseInt(value) || 0, prev.priceRange[1]]
        : [prev.priceRange[0], parseInt(value) || 1000]
    }));
  };

  const clearFilters = () => {
    setFilters({
      categories: [],
      priceRange: [0, 1000],
      brands: [],
      rating: 0
    });
  };

  const getActiveFiltersCount = () => {
    return filters.categories.length + 
           filters.brands.length + 
           (filters.rating > 0 ? 1 : 0) +
           (filters.priceRange[0] > 0 || filters.priceRange[1] < 1000 ? 1 : 0);
  };

  const FilterSection = ({ title, children, sectionKey }) => (
    <div className="filter-section">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="section-header"
      >
        <span>{title}</span>
        <span className="chevron">
          {expandedSections[sectionKey] ? '▲' : '▼'}
        </span>
      </button>
      {expandedSections[sectionKey] && (
        <div className="section-content">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="ecommerce-container">
      <div className="main-content">
        {/* Mobile Filter Toggle */}
        <div className="mobile-toggle">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="filter-toggle-btn"
          >
            <span className="filter-icon">🔍</span>
            Filters
            {getActiveFiltersCount() > 0 && (
              <span className="filter-count">
                {getActiveFiltersCount()}
              </span>
            )}
          </button>
        </div>

        {/* Filter Sidebar */}
        <div className={`filter-sidebar ${isOpen ? 'open' : ''}`}>
          <div className="filter-container">
            <div className="filter-header">
              <h2>Filters</h2>
              <div className="header-actions">
                {getActiveFiltersCount() > 0 && (
                  <button onClick={clearFilters} className="clear-btn">
                    Clear all
                  </button>
                )}
                <button
                  onClick={() => setIsOpen(false)}
                  className="close-btn"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Categories */}
            <FilterSection title="Categories" sectionKey="category">
              <div className="checkbox-group">
                {categories.map(category => (
                  <label key={category} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleCategoryChange(category)}
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Price Range */}
            <FilterSection title="Price Range" sectionKey="price">
              <div className="price-range">
                <div className="price-inputs">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange[0]}
                    onChange={(e) => handlePriceChange(e.target.value, 'min')}
                    className="price-input"
                  />
                  <span>-</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange[1]}
                    onChange={(e) => handlePriceChange(e.target.value, 'max')}
                    className="price-input"
                  />
                </div>
                <div className="price-display">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </div>
              </div>
            </FilterSection>

            {/* Brands */}
            <FilterSection title="Brands" sectionKey="brand">
              <div className="checkbox-group">
                {brands.map(brand => (
                  <label key={brand} className="checkbox-item">
                    <input
                      type="checkbox"
                      checked={filters.brands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <span>{brand}</span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Rating */}
            <FilterSection title="Customer Rating" sectionKey="rating">
              <div className="radio-group">
                {[4, 3, 2, 1].map(rating => (
                  <label key={rating} className="radio-item">
                    <input
                      type="radio"
                      name="rating"
                      checked={filters.rating === rating}
                      onChange={() => setFilters(prev => ({ ...prev, rating }))}
                    />
                    <span className="rating-display">
                      {'★'.repeat(rating)}{'☆'.repeat(5-rating)}
                      <span className="rating-text">& up</span>
                    </span>
                  </label>
                ))}
              </div>
            </FilterSection>

            {/* Apply Button */}
            <button className="apply-btn">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Products Section */}
        <div className="products-section">
          <div className="products-container">
            <div className="products-header">
              <h2>Products</h2>
              <div className="header-controls">
                <span className="product-count">1,247 products</span>
                <select className="sort-select">
                  <option>Sort by: Relevance</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Customer Rating</option>
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {getActiveFiltersCount() > 0 && (
              <div className="active-filters">
                {filters.categories.map(category => (
                  <span key={category} className="filter-tag category-tag">
                    {category}
                    <button onClick={() => handleCategoryChange(category)}>
                      ✕
                    </button>
                  </span>
                ))}
                {filters.brands.map(brand => (
                  <span key={brand} className="filter-tag brand-tag">
                    {brand}
                    <button onClick={() => handleBrandChange(brand)}>
                      ✕
                    </button>
                  </span>
                ))}
                {filters.rating > 0 && (
                  <span className="filter-tag rating-tag">
                    {filters.rating}+ Stars
                    <button onClick={() => setFilters(prev => ({ ...prev, rating: 0 }))}>
                      ✕
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Products Grid */}
            <div className="products-grid">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="product-card">
                  <div className="product-image"></div>
                  <h3 className="product-title">Sample Product {i}</h3>
                  <p className="product-brand">Brand Name</p>
                  <div className="product-rating">
                    <span className="stars">★★★★☆</span>
                    <span className="review-count">(123)</span>
                  </div>
                  <div className="product-footer">
                    <span className="product-price">
                      ${(Math.random() * 500 + 50).toFixed(2)}
                    </span>
                    <button className="add-to-cart">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceFilter;