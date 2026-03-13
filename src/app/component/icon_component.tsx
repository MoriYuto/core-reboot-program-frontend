import ArrowDown from "../../assets/icons/arrow_down.svg";
import ArrowForward from "../../assets/icons/arrow_forward.svg";
import Autorenew from "../../assets/icons/autorenew.svg";
import Brain from "../../assets/icons/brain.svg";
import ChatBubbleOff from "../../assets/icons/chat_bubble_off.svg";
import Check from "../../assets/icons/check.svg";
import Close from "../../assets/icons/close.svg";
import ConversionPath from "../../assets/icons/conversion_path.svg";
import Home from "../../assets/icons/crp_icon.svg";
import Database from "../../assets/icons/database.svg";
import Monitoring from "../../assets/icons/monitoring.svg";
import Mood from "../../assets/icons/mood.svg";
import PersonHeart from "../../assets/icons/person_heart.svg";
import Schedule from "../../assets/icons/schedule.svg";
import Stacks from "../../assets/icons/stacks.svg";
import Visibility from "../../assets/icons/visibility.svg";
import VisibilityOff from "../../assets/icons/visibility_off.svg";

export type IconProps = {
    className?: string;
    size: `${number}rem`;
};
export type IconComponent = React.ComponentType<IconProps>;

export const LogoIcon = () => {
    return <Home className="w-[4rem] h-[4rem]" aria-hidden="true" />;
};

export const ArrowDownIcon = ({ className, size }: IconProps) => (
    <ArrowDown aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const ArrowForwardIcon = ({ className, size }: IconProps) => (
    <ArrowForward aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const BrainIcon = ({ className, size }: IconProps) => (
    <Brain aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const DatabaseIcon = ({ className, size }: IconProps) => (
    <Database aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const MonitoringIcon = ({ className, size }: IconProps) => (
    <Monitoring aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const StacksIcon = ({ className, size }: IconProps) => (
    <Stacks aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const AutorenewIcon = ({ className, size }: IconProps) => (
    <Autorenew aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const ChatBubbleOffIcon = ({ className, size }: IconProps) => (
    <ChatBubbleOff aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const CheckIcon = ({ className, size }: IconProps) => (
    <Check aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const CloseIcon = ({ className, size }: IconProps) => (
    <Close aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const ConversionPathIcon = ({ className, size }: IconProps) => (
    <ConversionPath aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const MoodIcon = ({ className, size }: IconProps) => (
    <Mood aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const ScheduleIcon = ({ className, size }: IconProps) => (
    <Schedule aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const VisibilityIcon = ({ className, size }: IconProps) => (
    <Visibility aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const VisibilityOffIcon = ({ className, size }: IconProps) => (
    <VisibilityOff aria-hidden="true" className={className} style={{ width: size, height: size }} />
);

export const PersonHeartIcon = ({ className, size }: IconProps) => (
    <PersonHeart aria-hidden="true" className={className} style={{ width: size, height: size }} />
);