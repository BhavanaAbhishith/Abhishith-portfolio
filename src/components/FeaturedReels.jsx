import React from 'react';
import { InstagramIcon, ChevronRightIcon } from './Icons';

const reelsData = [
  {
    id: 1,
    title: 'Campus Life at GMRIT',
    views: '12.4K',
    likes: '1.2K',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=700&fit=crop&auto=format',
    link: 'https://www.instagram.com/reel/',
    tag: 'Campus',
  },
  {
    id: 2,
    title: 'Brand Promo Collab',
    views: '8.7K',
    likes: '980',
    thumbnail: 'https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=700&fit=crop&auto=format',
    link: 'https://www.instagram.com/reel/',
    tag: 'Promotion',
  },
  {
    id: 3,
    title: 'Tech Review Reel',
    views: '15.1K',
    likes: '1.8K',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=700&fit=crop&auto=format',
    link: 'https://www.instagram.com/reel/',
    tag: 'Tech',
  },
  {
    id: 4,
    title: 'Radio Jockey BTS',
    views: '6.3K',
    likes: '720',
    thumbnail: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=700&fit=crop&auto=format',
    link: 'https://www.instagram.com/reel/',
    tag: 'BTS',
  },
];

export default function FeaturedReels() {
  return (
    <section className="reels-section" id="reels">
      {/* Section Header */}
      <div className="reels-header">
        <div className="reels-header-left">
          <span className="reels-badge">
            <InstagramIcon />
            <span>Content Creator</span>
          </span>
          <h2 className="reels-heading">Featured Reels</h2>
          <p className="reels-subheading">
            Curated collection of promotional content, campus stories, and brand collaborations.
          </p>
        </div>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="reels-follow-btn"
        >
          <InstagramIcon />
          <span>Follow Me</span>
          <ChevronRightIcon size={16} />
        </a>
      </div>

      {/* Reels Grid */}
      <div className="reels-grid">
        {reelsData.map((reel) => (
          <a
            key={reel.id}
            href={reel.link}
            target="_blank"
            rel="noreferrer"
            className="reel-card"
          >
            {/* Phone Frame */}
            <div className="reel-phone-frame">
              {/* Notch */}
              <div className="reel-notch"></div>

              {/* Thumbnail */}
              <div
                className="reel-thumbnail"
                style={{ backgroundImage: `url(${reel.thumbnail})` }}
              >
                {/* Play Icon Overlay */}
                <div className="reel-play-overlay">
                  <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                    <circle cx="24" cy="24" r="23" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="rgba(0,0,0,0.3)" />
                    <path d="M19 14.5L35 24L19 33.5V14.5Z" fill="white" />
                  </svg>
                </div>

                {/* Tag Badge */}
                <span className="reel-tag">{reel.tag}</span>

                {/* Bottom Gradient Info */}
                <div className="reel-info-bar">
                  <span className="reel-title">{reel.title}</span>
                  <div className="reel-metrics">
                    <span className="reel-metric">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                      {reel.views}
                    </span>
                    <span className="reel-metric">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                      {reel.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

