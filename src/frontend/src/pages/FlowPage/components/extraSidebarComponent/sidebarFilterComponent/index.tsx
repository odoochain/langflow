import ForwardedIconComponent from "@/components/genericIconComponent";
import ShadTooltip from "@/components/shadTooltipComponent";
import { Button } from "@/components/ui/button";

export function SidebarFilterComponent({
  isInput,
  type,
  color,
  resetFilters,
}: {
  isInput: boolean;
  type: string;
  color: string;
  resetFilters: () => void;
}) {
  return (
    <div
      className={`mb-0.5 flex w-full items-center justify-between rounded border p-2 text-sm text-foreground`}
      style={{
        backgroundColor: `hsl(var(--inner-${color}-foreground))`,
      }}
    >
      <div className="flex flex-1 items-center gap-1.5">
        <ForwardedIconComponent
          name="ListFilter"
          className={`h-4 w-4 shrink-0 stroke-2`}
        />
        <div className="flex flex-1">
          {isInput ? "Input" : "Output"}:{" "}
          <div className="w-[5.7rem] flex-1 overflow-hidden truncate pl-1">
            {type}
          </div>
        </div>
      </div>
      <ShadTooltip
        side="right"
        styleClasses="max-w-full"
        content="Remove filter"
      >
        <Button
          unstyled
          className="shrink-0"
          onClick={resetFilters}
          data-testid="sidebar-filter-reset"
        >
          <ForwardedIconComponent
            name="X"
            className="h-4 w-4 stroke-2"
            aria-hidden="true"
          />
        </Button>
      </ShadTooltip>
    </div>
  );
}
