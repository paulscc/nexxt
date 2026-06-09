interface SplitTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span';
  id?: string;
}

export default function SplitText({ text, className = '', as: Tag = 'span', id }: SplitTextProps) {
  const letters = text.split('').map((char, i) => (
    <span key={i} style={{ display: 'inline-block', willChange: 'transform' }}>
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));

  return (
    <Tag className={className} id={id}>
      {letters}
    </Tag>
  );
}