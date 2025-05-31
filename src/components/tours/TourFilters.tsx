/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories, experienceLevels, regions } from "@/lib/tours-data";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";

interface FilterState {
  search: string;
  category: string;
  region: string;
  level: string;
  priceRange: [number, number];
}

interface TourFiltersProps {
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  className?: string;
}

export function TourFilters({
  filters,
  onFiltersChange,
  className,
}: TourFiltersProps) {
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value,
    });
  };

  const clearFilters = () => {
    onFiltersChange({
      search: "",
      category: "all",
      region: "all",
      level: "all",
      priceRange: [0, 20000],
    });
  };

  const hasActiveFilters =
    filters.search !== "" ||
    filters.category !== "all" ||
    filters.region !== "all" ||
    filters.level !== "all" ||
    filters.priceRange[0] !== 0 ||
    filters.priceRange[1] !== 20000;

  return (
    <motion.div
      className={cn(
        "bg-white rounded-2xl shadow-lg border border-gray-100 p-6",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <SlidersHorizontal className="w-5 h-5 text-luxury-navy" />
          <h3 className="font-serif text-lg font-semibold text-luxury-navy">
            Filter Your Perfect Journey
          </h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-luxury-emerald hover:text-luxury-emerald-dark"
          >
            <X className="w-4 h-4 mr-1" />
            Clear All
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {/* Search */}
        <div className="space-y-2">
          <Label
            htmlFor="search"
            className="text-sm font-medium text-luxury-charcoal"
          >
            Search Destinations
          </Label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              id="search"
              placeholder="Search tours..."
              value={filters.search}
              onChange={(e) => handleFilterChange("search", e.target.value)}
              className="pl-10 border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald"
            />
          </div>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-luxury-charcoal">
            Category
          </Label>
          <Select
            value={filters.category}
            onValueChange={(value) => handleFilterChange("category", value)}
          >
            <SelectTrigger className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Region */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-luxury-charcoal">
            Region
          </Label>
          <Select
            value={filters.region}
            onValueChange={(value) => handleFilterChange("region", value)}
          >
            <SelectTrigger className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald">
              <SelectValue placeholder="Select region" />
            </SelectTrigger>
            <SelectContent>
              {regions.map((region) => (
                <SelectItem key={region.value} value={region.value}>
                  {region.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Experience Level */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-luxury-charcoal">
            Experience Level
          </Label>
          <Select
            value={filters.level}
            onValueChange={(value) => handleFilterChange("level", value)}
          >
            <SelectTrigger className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald">
              <SelectValue placeholder="Select level" />
            </SelectTrigger>
            <SelectContent>
              {experienceLevels.map((level) => (
                <SelectItem key={level.value} value={level.value}>
                  {level.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Price Range */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-luxury-charcoal">
            Price Range
          </Label>
          <div className="flex items-center space-x-2">
            <Input
              type="number"
              placeholder="Min"
              value={filters.priceRange[0] === 0 ? "" : filters.priceRange[0]}
              onChange={(e) =>
                handleFilterChange("priceRange", [
                  parseInt(e.target.value) || 0,
                  filters.priceRange[1],
                ])
              }
              className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald text-sm"
            />
            <span className="text-gray-400">-</span>
            <Input
              type="number"
              placeholder="Max"
              value={
                filters.priceRange[1] === 20000 ? "" : filters.priceRange[1]
              }
              onChange={(e) =>
                handleFilterChange("priceRange", [
                  filters.priceRange[0],
                  parseInt(e.target.value) || 20000,
                ])
              }
              className="border-gray-200 focus:border-luxury-emerald focus:ring-luxury-emerald text-sm"
            />
          </div>
        </div>
      </div>

      {/* Active Filters Display */}
      {hasActiveFilters && (
        <motion.div
          className="mt-4 pt-4 border-t border-gray-100"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-2">
            {filters.search && (
              <span className="inline-flex items-center px-3 py-1 bg-luxury-emerald/10 text-luxury-emerald text-sm rounded-full">
                Search: "{filters.search}"
                <button
                  onClick={() => handleFilterChange("search", "")}
                  className="ml-2 text-luxury-emerald hover:text-luxury-emerald-dark"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.category !== "all" && (
              <span className="inline-flex items-center px-3 py-1 bg-luxury-navy/10 text-luxury-navy text-sm rounded-full">
                {categories.find((c) => c.value === filters.category)?.label}
                <button
                  onClick={() => handleFilterChange("category", "all")}
                  className="ml-2 text-luxury-navy hover:text-luxury-navy-dark"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.region !== "all" && (
              <span className="inline-flex items-center px-3 py-1 bg-luxury-gold/10 text-luxury-gold-dark text-sm rounded-full">
                {regions.find((r) => r.value === filters.region)?.label}
                <button
                  onClick={() => handleFilterChange("region", "all")}
                  className="ml-2 text-luxury-gold-dark hover:text-luxury-gold"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {filters.level !== "all" && (
              <span className="inline-flex items-center px-3 py-1 bg-luxury-emerald/10 text-luxury-emerald text-sm rounded-full">
                {experienceLevels.find((l) => l.value === filters.level)?.label}
                <button
                  onClick={() => handleFilterChange("level", "all")}
                  className="ml-2 text-luxury-emerald hover:text-luxury-emerald-dark"
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
