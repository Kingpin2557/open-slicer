import React from "react";
import {
  FolderIcon,
  FolderPlusIcon,
  ArrowUpTrayIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Icons({ type, size }: { type: string; size: number }) {
  const icons: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    folder: FolderIcon,
    "folder-plus": FolderPlusIcon,
    folderPlus: FolderPlusIcon,
    folder_plus: FolderPlusIcon,
    upload: ArrowUpTrayIcon,
    arrow: ArrowRightIcon,
    cog: Cog6ToothIcon,
    cog6tooth: Cog6ToothIcon,
  };

  const Icon = icons[type];

  return Icon ? <Icon width={size} height={size} /> : null;
}

export default Icons;
