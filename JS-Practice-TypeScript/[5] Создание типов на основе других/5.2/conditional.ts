type Value = true | 'yes';
type ValueType<T> = T extends true ? boolean : string;