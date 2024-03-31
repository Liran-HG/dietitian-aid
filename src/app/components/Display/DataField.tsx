
type Props = {
  name: string;
  value: string;
  multiline?:boolean;
};

export function DataField(props: Props) {
  return (
    <div className="flex gap-1">
      <p className="font-semibold">{props.name}: </p> {props.multiline ? <div dangerouslySetInnerHTML={{ __html:props.value.replaceAll("\\n", "</br>")}}></div> : props.value}
    </div>
  );
}
