"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { MoreVertical, Users, Download, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ContactBulkActionsMenuProps {
  onBulkAddToGroup: () => void;
  onBulkExport: () => void;
  onBulkDelete: () => void;
}

export function ContactBulkActionsMenu({
  onBulkAddToGroup,
  onBulkExport,
  onBulkDelete,
}: ContactBulkActionsMenuProps) {
  const t = useTranslations("contacts");
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleAction = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-7 text-xs px-2"
        aria-expanded={isOpen}
        aria-haspopup="menu"
        data-testid="contact-bulk-actions-trigger"
      >
        {t("bulk.actions")}
        <MoreVertical className="w-3.5 h-3.5 ml-1.5" />
      </Button>

      {isOpen && (
        <div
          role="menu"
          className={cn(
            "absolute right-0 top-full mt-1 z-20 min-w-[180px]",
            "rounded-md border border-border bg-background shadow-lg",
            "py-1 animate-in fade-in-0 zoom-in-95 duration-100"
          )}
        >
          <button
            role="menuitem"
            onClick={() => handleAction(onBulkAddToGroup)}
            className="w-full px-3 py-2 text-left text-xs hover:bg-muted flex items-center gap-2"
          >
            <Users className="w-3.5 h-3.5" />
            {t("bulk.add_to_group")}
          </button>
          <button
            role="menuitem"
            onClick={() => handleAction(onBulkExport)}
            className="w-full px-3 py-2 text-left text-xs hover:bg-muted flex items-center gap-2"
          >
            <Download className="w-3.5 h-3.5" />
            {t("bulk.export")}
          </button>
          <button
            role="menuitem"
            onClick={() => handleAction(onBulkDelete)}
            className="w-full px-3 py-2 text-left text-xs text-destructive hover:bg-destructive/10 flex items-center gap-2"
          >
            <Trash2 className="w-3.5 h-3.5" />
            {t("bulk.delete")}
          </button>
        </div>
      )}
    </div>
  );
}
