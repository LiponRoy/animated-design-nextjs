import { create } from 'zustand';

interface LeftSidebarModalStore {
	isOpen: boolean;
	onOpen: () => void;
	onClose: () => void;

	
}

const useLeftSidebarModalStore = create<LeftSidebarModalStore>((set) => ({
	isOpen: false,
	onOpen: () => set({ isOpen: true }),
	onClose: () => set({ isOpen: false }),
	
}));

export default useLeftSidebarModalStore;
