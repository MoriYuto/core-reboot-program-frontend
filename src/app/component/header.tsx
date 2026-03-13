'use client'

import { StartDiagnosisButton } from "./button_component";
import { LogoIcon } from "./icon_component";

type HeaderProps = {
    headerHeight: number;
}

export const Header = ({ headerHeight }: HeaderProps) => {
    return (
        <header className="fixed top-0 left-0 w-full px-[5vw] flex items-center justify-between bg-surface z-50" style={{ height: headerHeight}}>
            <div aria-label="Core Reboot Program">
                <LogoIcon />
            </div>
            <nav aria-label="メインナビゲーション">
                <StartDiagnosisButton>
                    <span className="text-label-small text-on-primary">無料診断を開始</span>
                </StartDiagnosisButton>
            </nav>
        </header>
    );
};

