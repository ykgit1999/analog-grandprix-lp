"use client";

import { ScrollReveal } from "@/components/ui/scroll-reveal";
import articles from "@/data/audio-land/articles.json";

export function AudioLandArticleList() {
  return (
    <div>
      <h2 className="al-section-heading">ニュース＆コラム</h2>
      <div className="al-articles">
        {articles.map((article, i) => (
          <ScrollReveal key={i} delay={i * 0.05}>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="al-article-item"
            >
              <div className="al-article-thumb">
                <span className="al-article-thumb-text">PHILE WEB</span>
              </div>
              <div className="al-article-body">
                <div className="al-article-meta">
                  <span className="al-article-date">{article.date}</span>
                  {"series" in article && article.series ? (
                    <span className="al-article-badge al-article-badge--series">
                      シリーズ({article.series})
                    </span>
                  ) : (
                    <span className="al-article-badge">{article.category}</span>
                  )}
                </div>
                <h3 className="al-article-title">{article.title}</h3>
              </div>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
