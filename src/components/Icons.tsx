import React from "react";
import {
  HomeIcon,
  UserIcon,
  CheckIcon,
  BellIcon,
  CogIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

function Icons({ type, size }: { type: string; size: number }) {
  console.log(type);

  const icons: Record<
    string,
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    home: HomeIcon,
    user: UserIcon,
    check: CheckIcon,
    bell: BellIcon,
    notification: BellIcon,
    settings: CogIcon,
    cog: Cog6ToothIcon,
    add: PlusIcon,
    plus: PlusIcon,
    edit: PencilIcon,
    pencil: PencilIcon,
    delete: TrashIcon,
    trash: TrashIcon,
  };

  const Icon = icons[type] ?? QuestionMarkCircleIcon;

  return <Icon width={size} height={size} />;
}

export default Icons;
