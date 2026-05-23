import { Loader } from "lucide-react";

export function AppLoader() {
  return (
    <div className="fixed inset-0 z-100 flex size-full items-center justify-center">
      <div className="relative z-100 flex size-full max-w-6xl items-center justify-center border-x border-dashed bg-background">
        <Loader className="animate-spin" size={40} />
      </div>
    </div>
  );
}
