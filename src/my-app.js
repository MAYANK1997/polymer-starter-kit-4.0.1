import { useState } from "react";
import PortalHeader from "@/components/PortalHeader";
import SearchBar from "@/components/SearchBar";
import NewsletterGrid from "@/components/NewsletterGrid";
import { newsletterData } from "@/data/newsletterData";
import { FileText, Calendar } from "lucide-react";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <PortalHeader />
      
      <main className="max-w-[1800px] mx-auto px-6 py-6">
        {/* Stats Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <FileText className="h-4 w-4" />
              <span><strong className="text-foreground">{newsletterData.length}</strong> Total Records</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>Last Updated: <strong className="text-foreground">Dec 10, 2024</strong></span>
            </div>
          </div>
          <SearchBar 
            data={newsletterData} 
            searchTerm={searchTerm} 
            onSearchChange={setSearchTerm} 
          />
        </div>

        {/* Instructions */}
        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground bg-muted/50 px-4 py-2.5 rounded-lg">
          <span className="flex items-center gap-1.5">
            <span className="font-medium text-foreground">Tip:</span>
            Double-click on Person/Firm, Location, or Information cells to edit
          </span>
          <span className="text-border">|</span>
          <span>Press Enter to save changes</span>
          <span className="text-border">|</span>
          <span>Click PDF links to download</span>
        </div>

        {/* Grid */}
        <NewsletterGrid searchTerm={searchTerm} />
      </main>
    </div>
  );
};

export default Index;




import { useState, useMemo, useRef, useEffect } from "react";
import { Search, X } from "lucide-react";
import { NewsletterRow } from "@/data/newsletterData";

interface SearchBarProps {
  data: NewsletterRow[];
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar = ({ data, searchTerm, onSearchChange }: SearchBarProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  const suggestions = useMemo(() => {
    if (!searchTerm || searchTerm.length < 2) return [];
    
    const term = searchTerm.toLowerCase();
    const matches = new Set<string>();
    
    data.forEach(row => {
      if (row.section.toLowerCase().includes(term)) matches.add(row.section);
      if (row.strategy.toLowerCase().includes(term)) matches.add(row.strategy);
      if (row.personFirm.toLowerCase().includes(term)) matches.add(row.personFirm);
      if (row.location.toLowerCase().includes(term)) matches.add(row.location);
      if (row.information.toLowerCase().includes(term)) {
        const words = row.information.split(' ');
        words.forEach(word => {
          if (word.toLowerCase().includes(term)) matches.add(word);
        });
      }
    });
    
    return Array.from(matches).slice(0, 8);
  }, [data, searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setFocusedIndex(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setFocusedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === "Enter" && focusedIndex >= 0) {
      e.preventDefault();
      onSearchChange(suggestions[focusedIndex]);
      setShowSuggestions(false);
      setFocusedIndex(-1);
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setFocusedIndex(-1);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    onSearchChange(suggestion);
    setShowSuggestions(false);
    setFocusedIndex(-1);
  };

  const clearSearch = () => {
    onSearchChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search newsletters..."
          value={searchTerm}
          onChange={(e) => {
            onSearchChange(e.target.value);
            setShowSuggestions(true);
            setFocusedIndex(-1);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-10 py-2.5 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all placeholder:text-muted-foreground"
        />
        {searchTerm && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 hover:bg-muted rounded transition-colors"
          >
            <X className="h-4 w-4 text-muted-foreground" />
          </button>
        )}
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-1 bg-popover border border-border rounded-lg shadow-lg z-50 overflow-hidden"
        >
          {suggestions.map((suggestion, index) => (
            <button
              key={suggestion}
              onClick={() => handleSuggestionClick(suggestion)}
              className={`w-full px-4 py-2.5 text-left text-sm hover:bg-muted transition-colors flex items-center gap-2 ${
                index === focusedIndex ? "bg-muted" : ""
              }`}
            >
              <Search className="h-3.5 w-3.5 text-muted-foreground" />
              <span>{suggestion}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

