function always(x) {
  return () => x;
},function applySpec(spec, ...args) {
  const arity = __findHighestArity(spec);

  if (arity === 0) {
    return () => ({});
  }

  const toReturn = __applySpecWithArity(spec, arity, args);

  return toReturn;
},function compose(...fns) {
  if (fns.length === 0) {
    throw new Error('compose requires at least one argument');
  }

  return (...args) => {
    const list = fns.slice();

    if (list.length > 0) {
      const fn = list.pop();
      let result = fn(...args);

      while (list.length > 0) {
        result = list.pop()(result);
      }

      return result;
    }
  };
},function curry(fn, args = []) {
  return (..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]);
},function F() {
  return false;
},function flip(fn) {
  return flipExport(fn);
},function identity(x) {
  return x;
},function negate(n) {
  return -n;
},function partial(fn, ...args) {
  const len = fn.length;
  return (...rest) => {
    if (args.length + rest.length >= len) {
      return fn(...args, ...rest);
    }

    return partial(fn, ...[...args, ...rest]);
  };
},function pipe(...fns) {
  if (fns.length === 0) throw new Error('pipe requires at least one argument');
  return compose(...fns.reverse());
},function T() {
  return true;
},function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x);
  fn(x);
  return x;
},function add(a, b) {
  if (arguments.length === 1) return _b => add(a, _b);
  return Number(a) + Number(b);
},n => n - 1,n => n + 1,function mathMod(m, p) {
  if (arguments.length === 1) return _p => mathMod(m, _p);
  if (!_isInteger$1(m) || !_isInteger$1(p) || p < 1) return NaN;
  return (m % p + p) % p;
},function mean(list) {
  return sum(list) / list.length;
},function median(list) {
  const len = list.length;
  if (len === 0) return NaN;
  const width = 2 - len % 2;
  const idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort((a, b) => {
    if (a === b) return 0;
    return a < b ? -1 : 1;
  }).slice(idx, idx + width));
},function modulo(a, b) {
  if (arguments.length === 1) return _b => modulo(a, _b);
  return a % b;
},function multiply(a, b) {
  if (arguments.length === 1) return _b => multiply(a, _b);
  return a * b;
},function negate(n) {
  return -n;
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function subtract(a, b) {
  if (arguments.length === 1) return _b => subtract(a, _b);
  return a - b;
},function sum(list) {
  return list.reduce((prev, current) => prev + current, 0);
},function all(fn, list) {
  if (arguments.length === 1) return _list => all(fn, _list);

  for (let i = 0; i < list.length; i++) {
    if (!fn(list[i], i)) return false;
  }

  return true;
},function any(fn, list) {
  if (arguments.length === 1) return _list => any(fn, _list);
  let counter = 0;

  while (counter < list.length) {
    if (fn(list[counter], counter)) {
      return true;
    }

    counter++;
  }

  return false;
},function append(el, list) {
  if (arguments.length === 1) return _list => append(el, _list);
  if (typeof list === 'string') return `${list}${el}`;
  const clone = list.slice();
  clone.push(el);
  return clone;
},function concat(left, right) {
  if (arguments.length === 1) return _right => concat(left, _right);
  return typeof left === 'string' ? `${left}${right}` : [...left, ...right];
},function difference(list1, list2) {
  if (arguments.length === 1) return _list => difference(list1, _list);
  return uniq(list1).filter(x1 => !includes(x1, list2));
},function drop(n, listOrString) {
  if (arguments.length === 1) return _list => drop(n, _list);
  return listOrString.slice(n > 0 ? n : 0);
},function dropLast(n, list) {
  if (arguments.length === 1) return _list => dropLast(n, _list);
  return n > 0 ? list.slice(0, -n) : list.slice();
},function endsWith(suffix, list) {
  if (arguments.length === 1) return _list => endsWith(suffix, _list);
  return list.endsWith(suffix);
},function filter(fn, list) {
  if (arguments.length === 1) return _list => filter(fn, _list);
  if (!list) return [];

  if (!Array.isArray(list)) {
    return filterObject(fn, list);
  }

  let index = -1;
  let resIndex = 0;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];

    if (fn(value, index)) {
      willReturn[resIndex++] = value;
    }
  }

  return willReturn;
},function find(fn, list) {
  if (arguments.length === 1) return _list => find(fn, _list);
  return list.find(fn);
},function findIndex(fn, list) {
  if (arguments.length === 1) return _list => findIndex(fn, _list);
  const len = list.length;
  let index = -1;

  while (++index < len) {
    if (fn(list[index], index)) {
      return index;
    }
  }

  return -1;
},function flatten(list, input) {
  const willReturn = input === undefined ? [] : input;

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flatten(list[i], willReturn);
    } else {
      willReturn.push(list[i]);
    }
  }

  return willReturn;
},function forEach(fn, list) {
  if (arguments.length === 1) return _list => forEach(fn, _list);
  map(fn, list);
  return list;
},function fromPairs(list) {
  const toReturn = {};
  list.forEach(([prop, value]) => toReturn[prop] = value);
  return toReturn;
},function groupBy(fn, list) {
  if (arguments.length === 1) return _list => groupBy(fn, _list);
  const result = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    const key = fn(item);

    if (!result[key]) {
      result[key] = [];
    }

    result[key].push(item);
  }

  return result;
},function groupWith(predicate, list) {
  const toReturn = [];
  let holder = [];
  list.reduce((prev, current, i) => {
    if (i > 0 && predicate(prev, current)) {
      if (holder.length === 0) {
        holder.push(prev);
        holder.push(current);
      } else {
        holder.push(current);
      }
    } else if (i > 0) {
      if (holder.length === 0) {
        toReturn.push([prev]);
        if (i === list.length - 1) holder.push(current);
      } else {
        toReturn.push(holder);
        holder = [];
      }
    }

    return current;
  }, undefined);
  return holder.length === 0 ? toReturn : [...toReturn, holder];
},function head(list) {
  if (typeof list === 'string') return list[0] || '';
  return list[0];
},function includes(target, list) {
  if (arguments.length === 1) return _input => includes(target, _input);

  if (typeof list === 'string') {
    return list.includes(target);
  }

  if (!Array.isArray(list)) return false;
  let index = -1;

  while (++index < list.length) {
    if (equals(list[index], target)) {
      return true;
    }
  }

  return false;
},function indexBy(fnOrPath, list) {
  if (arguments.length === 1) {
    return _list => indexBy(fnOrPath, _list);
  }

  if (typeof fnOrPath === 'string') {
    return indexByPath(fnOrPath, list);
  }

  const toReturn = {};

  for (let i = 0; i < list.length; i++) {
    const item = list[i];
    toReturn[fnOrPath(item)] = item;
  }

  return toReturn;
},function indexOf(target, list) {
  if (arguments.length === 1) return _list => indexOf(target, _list);
  let index = -1;
  const {
    length
  } = list;

  while (++index < length) {
    if (list[index] === target) {
      return index;
    }
  }

  return -1;
},function init(list) {
  if (typeof list === 'string') return list.slice(0, -1);
  return list.length ? baseSlice(list, 0, -1) : [];
},function intersection(list1, list2) {
  if (arguments.length === 1) return _list => intersection(list1, _list);
  return filter(value => includes(value, list2), list1);
},function intersperse(separator, list) {
  if (arguments.length === 1) return _list => intersperse(separator, _list);
  let index = -1;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    if (index === len - 1) {
      willReturn.push(list[index]);
    } else {
      willReturn.push(list[index], separator);
    }
  }

  return willReturn;
},function join(separator, list) {
  if (arguments.length === 1) return _list => join(separator, _list);
  return list.join(separator);
},function last(list) {
  if (typeof list === 'string') return list[list.length - 1] || '';
  return list[list.length - 1];
},function lastIndexOf(target, list) {
  if (arguments.length === 1) return _list => lastIndexOf(target, _list);
  let index = list.length;

  while (--index > 0) {
    if (equals(list[index], target)) {
      return index;
    }
  }

  return -1;
},function length(list) {
  if (!list || list.length === undefined) {
    return NaN;
  }

  return list.length;
},function map(fn, list) {
  if (arguments.length === 1) return _list => map(fn, _list);

  if (list === undefined) {
    return [];
  }

  if (!Array.isArray(list)) {
    return mapObject(fn, list);
  }

  let index = -1;
  const len = list.length;
  const willReturn = Array(len);

  while (++index < len) {
    willReturn[index] = fn(list[index], index);
  }

  return willReturn;
},function none(fn, list) {
  if (arguments.length === 1) return _list => none(fn, _list);
  return list.filter(fn).length === 0;
},function nth(offset, list) {
  if (arguments.length === 1) return _list => nth(offset, _list);
  const idx = offset < 0 ? list.length + offset : offset;
  return Object.prototype.toString.call(list) === '[object String]' ? list.charAt(idx) : list[idx];
},function pluck(key, list) {
  if (arguments.length === 1) return _list => pluck(key, _list);
  const willReturn = [];
  map(val => {
    if (val[key] !== undefined) {
      willReturn.push(val[key]);
    }
  }, list);
  return willReturn;
},function prepend(el, list) {
  if (arguments.length === 1) return _list => prepend(el, _list);
  if (typeof list === 'string') return `${el}${list}`;
  const clone = [el].concat(list);
  return clone;
},function range(from, to) {
  if (arguments.length === 1) return _to => range(from, _to);

  if (Number.isNaN(Number(from)) || Number.isNaN(Number(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }

  if (to < from) return [];
  const len = to - from;
  const willReturn = Array(len);

  for (let i = 0; i < len; i++) {
    willReturn[i] = from + i;
  }

  return willReturn;
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function reject(fn, list) {
  if (arguments.length === 1) return _list => reject(fn, _list);
  return filter((x, i) => !fn(x, i), list);
},function repeat(val, n) {
  if (arguments.length === 1) return _n => repeat(val, _n);
  const willReturn = Array(n);
  return willReturn.fill(val);
},function reverse(input) {
  if (typeof input === 'string') {
    return input.split('').reverse().join('');
  }

  const clone = input.slice();
  return clone.reverse();
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function sort(fn, list) {
  if (arguments.length === 1) return _list => sort(fn, _list);
  const arrClone = list.slice();
  return arrClone.sort(fn);
},function splitEvery(n, list) {
  if (arguments.length === 1) return _list => splitEvery(n, _list);
  if (n < 1) throw new Error('First argument to splitEvery must be a positive integer');
  const willReturn = [];
  let counter = 0;

  while (counter < list.length) {
    willReturn.push(list.slice(counter, counter += n));
  }

  return willReturn;
},function startsWith(prefix, list) {
  if (arguments.length === 1) return _list => startsWith(prefix, _list);
  return list.startsWith(prefix);
},function tail(list) {
  return drop(1, list);
},function take(n, list) {
  if (arguments.length === 1) return _list => take(n, _list);
  if (n < 0) return list.slice();
  if (typeof list === 'string') return list.slice(0, n);
  return baseSlice(list, 0, n);
},function takeLast(n, list) {
  if (arguments.length === 1) return _list => takeLast(n, _list);
  const len = list.length;
  if (n < 0) return list.slice();
  let numValue = n > len ? len : n;
  if (typeof list === 'string') return list.slice(len - numValue);
  numValue = len - numValue;
  return baseSlice(list, numValue, len);
},function times(fn, n) {
  if (arguments.length === 1) return _n => times(fn, _n);
  if (!Number.isInteger(n) || n < 0) throw new RangeError('n must be an integer');
  return map(fn, range(0, n));
},function uniq(list) {
  let index = -1;
  const willReturn = [];

  while (++index < list.length) {
    const value = list[index];

    if (!includes(value, willReturn)) {
      willReturn.push(value);
    }
  }

  return willReturn;
},function uniqWith(fn, list) {
  if (arguments.length === 1) return _list => uniqWith(fn, _list);
  let index = -1;
  const len = list.length;
  const willReturn = [];

  while (++index < len) {
    const value = list[index];
    const flag = any(willReturnInstance => fn(value, willReturnInstance), willReturn);

    if (!flag) {
      willReturn.push(value);
    }
  }

  return willReturn;
},function update(idx, val, list) {
  if (val === undefined) {
    return (_val, _list) => update(idx, _val, _list);
  } else if (list === undefined) {
    return _list => update(idx, val, _list);
  }

  const arrClone = list.slice();
  return arrClone.fill(val, idx, idx + 1);
},function without(left, right) {
  if (right === undefined) {
    return _right => without(left, _right);
  }

  return reduce((accum, item) => includes(item, left) ? accum : accum.concat(item), [], right);
},function zip(left, right) {
  if (arguments.length === 1) return _right => zip(left, _right);
  const result = [];
  const length = Math.min(left.length, right.length);

  for (let i = 0; i < length; i++) {
    result[i] = [left[i], right[i]];
  }

  return result;
},function zipObj(keys, values) {
  if (arguments.length === 1) return yHolder => zipObj(keys, yHolder);
  return take(values.length, keys).reduce((prev, xInstance, i) => {
    prev[xInstance] = values[i];
    return prev;
  }, {});
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function clone(val) {
  const out = Array.isArray(val) ? Array(val.length) : {};
  if (val && val.getTime) return new Date(val.getTime());

  for (const key in val) {
    const v = val[key];
    out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
},function dissoc(prop, obj) {
  if (arguments.length === 1) return _obj => dissoc(prop, _obj);
  if (obj === null || obj === undefined) return {};
  const willReturn = {};

  for (const p in obj) {
    willReturn[p] = obj[p];
  }

  delete willReturn[prop];
  return willReturn;
},function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj);
  if (!obj) return false;
  return obj[prop] !== undefined;
},function isEmpty(input) {
  const inputType = type(input);
  if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType)) return false;
  if (!input) return true;

  if (inputType === 'Object') {
    return Object.keys(input).length === 0;
  }

  if (inputType === 'Array') {
    return input.length === 0;
  }

  return false;
},function keys(obj) {
  return Object.keys(obj);
},function lens(getter, setter) {
  if (arguments.length === 1) return _setter => lens(getter, _setter);
  return function (functor) {
    return function (target) {
      return functor(getter(target)).map(focus => setter(focus, target));
    };
  };
},function lensIndex(i) {
  return lens(nth(i), update(i));
},function lensPath(key) {
  return lens(path(key), assocPath(key));
},function lensProp(key) {
  return lens(prop(key), assoc(key));
},function merge(obj, props) {
  if (arguments.length === 1) return _props => merge(obj, _props);
  return Object.assign({}, obj || {}, props || {});
},function omit(keys, obj) {
  if (arguments.length === 1) return _obj => omit(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
},function over(lens, fn, object) {
  if (arguments.length === 1) return (_fn, _object) => over(lens, _fn, _object);
  if (arguments.length === 2) return _object => over(lens, fn, _object);
  return lens(x => Identity(fn(x)))(object).x;
},function path(list, obj) {
  if (arguments.length === 1) return _obj => path(list, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  let willReturn = obj;
  let counter = 0;
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }

    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function paths(pathsInput, obj) {
  return pathsInput.map(singlePath => path(singlePath, obj));
},function pick(keys, obj) {
  if (arguments.length === 1) return _obj => pick(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }

    counter++;
  }

  return willReturn;
},function pickAll(keys, obj) {
  if (arguments.length === 1) return _obj => pickAll(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }

    counter++;
  }

  return willReturn;
},function prop(key, obj) {
  if (arguments.length === 1) return _obj => prop(key, _obj);
  if (!obj) return undefined;
  return obj[key];
},function propOr(defaultValue, p, obj) {
  if (arguments.length === 2) return _obj => propOr(defaultValue, p, _obj);
  if (arguments.length === 1) return (_p, _obj) => propOr(defaultValue, _p, _obj);
  if (!obj) return defaultValue;
  return defaultTo(defaultValue, obj[p]);
},function set(lens, v, x) {
  if (arguments.length === 1) return (_v, _x) => set(lens, _v, _x);
  if (arguments.length === 2) return _x => set(lens, v, _x);
  return over(lens, always(v), x);
},function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x);
  fn(x);
  return x;
},function toPairs(obj) {
  return Object.entries(obj);
},function values(obj) {
  if (type(obj) !== 'Object') return [];
  return Object.values(obj);
},function view(lens, target) {
  if (arguments.length === 1) return _target => view(lens, _target);
  return lens(Const)(target).x;
},function allPass(predicates) {
  return input => {
    let counter = 0;

    while (counter < predicates.length) {
      if (!predicates[counter](input)) {
        return false;
      }

      counter++;
    }

    return true;
  };
},function and(a, b) {
  if (arguments.length === 1) return _b => and(a, _b);
  return a && b;
},function anyPass(predicates) {
  return input => {
    let counter = 0;

    while (counter < predicates.length) {
      if (predicates[counter](input)) {
        return true;
      }

      counter++;
    }

    return false;
  };
},function both(f, g) {
  if (arguments.length === 1) return _g => both(f, _g);
  return (...input) => f(...input) && g(...input);
},function complement(fn) {
  return (...input) => !fn(...input);
},function cond(conditions) {
  return input => {
    let done = false;
    let toReturn;
    conditions.forEach(([predicate, resultClosure]) => {
      if (!done && predicate(input)) {
        done = true;
        toReturn = resultClosure(input);
      }
    });
    return toReturn;
  };
},function either(f, g) {
  if (arguments.length === 1) return _g => either(f, _g);
  return (...input) => f(...input) || g(...input);
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function isEmpty(input) {
  const inputType = type(input);
  if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType)) return false;
  if (!input) return true;

  if (inputType === 'Object') {
    return Object.keys(input).length === 0;
  }

  if (inputType === 'Array') {
    return input.length === 0;
  }

  return false;
},function not(a) {
  return !a;
},function xor(a, b) {
  if (arguments.length === 1) return _b => xor(a, _b);
  return Boolean(a) && !b || Boolean(b) && !a;
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function difference(list1, list2) {
  if (arguments.length === 1) return _list => difference(list1, _list);
  return uniq(list1).filter(x1 => !includes(x1, list2));
},function equals(a, b) {
  if (arguments.length === 1) return _b => equals(a, _b);
  const aType = type(a);
  if (aType !== type(b)) return false;
  if (['NaN', 'Undefined', 'Null'].includes(aType)) return true;
  if (['Boolean', 'Number', 'String'].includes(aType)) return a.toString() === b.toString();

  if (aType === 'Array') {
    const aClone = Array.from(a);
    const bClone = Array.from(b);

    if (aClone.toString() !== bClone.toString()) {
      return false;
    }

    let loopArrayFlag = true;
    aClone.forEach((aCloneInstance, aCloneIndex) => {
      if (loopArrayFlag) {
        if (aCloneInstance !== bClone[aCloneIndex] && !equals(aCloneInstance, bClone[aCloneIndex])) {
          loopArrayFlag = false;
        }
      }
    });
    return loopArrayFlag;
  }

  const aRegex = parseRegex(a);
  const bRegex = parseRegex(b);

  if (aRegex[0]) {
    return bRegex[0] ? aRegex[1] === bRegex[1] : false;
  } else if (bRegex[0]) return false;

  const aDate = parseDate(a);
  const bDate = parseDate(b);

  if (aDate[0]) {
    return bDate[0] ? aDate[1] === bDate[1] : false;
  } else if (bDate[0]) return false;

  const aError = parseError(a);
  const bError = parseError(b);

  if (aError[0]) {
    return bError[0] ? aError[0] === bError[0] && aError[1] === bError[1] : false;
  }

  if (aType === 'Object') {
    const aKeys = Object.keys(a);

    if (aKeys.length !== Object.keys(b).length) {
      return false;
    }

    let loopObjectFlag = true;
    aKeys.forEach(aKeyInstance => {
      if (loopObjectFlag) {
        const aValue = a[aKeyInstance];
        const bValue = b[aKeyInstance];

        if (aValue !== bValue && !equals(aValue, bValue)) {
          loopObjectFlag = false;
        }
      }
    });
    return loopObjectFlag;
  }

  return false;
},function identical(a, b) {
  if (arguments.length === 1) return _b => identical(a, _b);
  return _objectIs$1(a, b);
},function intersection(list1, list2) {
  if (arguments.length === 1) return _list => intersection(list1, _list);
  return filter(value => includes(value, list2), list1);
},function max(a, b) {
  if (arguments.length === 1) return _b => max(a, _b);
  return b > a ? b : a;
},function maxBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => maxBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => maxBy(fn, _a, _b);
  }

  return fn(b) > fn(a) ? b : a;
},function min(a, b) {
  if (arguments.length === 1) return _b => min(a, _b);
  return b < a ? b : a;
},function minBy(fn, a, b) {
  if (arguments.length === 2) {
    return _b => minBy(fn, a, _b);
  } else if (arguments.length === 1) {
    return (_a, _b) => minBy(fn, _a, _b);
  }

  return fn(b) < fn(a) ? b : a;
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function sortBy(fn, list) {
  if (arguments.length === 1) return _list => sortBy(fn, _list);
  const arrClone = list.slice();
  return arrClone.sort((a, b) => {
    const fnA = fn(a);
    const fnB = fn(b);
    if (fnA === fnB) return 0;
    return fnA < fnB ? -1 : 1;
  });
},function is(ctor, val) {
  if (arguments.length === 1) return _val => is(ctor, _val);
  return val != null && val.constructor === ctor || val instanceof ctor;
},function isNil(x) {
  return x === undefined || x === null;
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function type(input) {
  const typeOf = typeof input;

  if (input === null) {
    return 'Null';
  } else if (input === undefined) {
    return 'Undefined';
  } else if (typeOf === 'boolean') {
    return 'Boolean';
  } else if (typeOf === 'number') {
    return Number.isNaN(input) ? 'NaN' : 'Number';
  } else if (typeOf === 'string') {
    return 'String';
  } else if (Array.isArray(input)) {
    return 'Array';
  } else if (input instanceof RegExp) {
    return 'RegExp';
  }

  const asStr = input && input.toString ? input.toString() : '';
  if (['true', 'false'].includes(asStr)) return 'Boolean';
  if (!Number.isNaN(Number(asStr))) return 'Number';
  if (asStr.startsWith('async')) return 'Async';
  if (asStr === '[object Promise]') return 'Promise';
  if (typeOf === 'function') return 'Function';
  if (input instanceof String) return 'String';
  return 'Object';
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function clone(val) {
  const out = Array.isArray(val) ? Array(val.length) : {};
  if (val && val.getTime) return new Date(val.getTime());

  for (const key in val) {
    const v = val[key];
    out[key] = typeof v === 'object' && v !== null ? v.getTime ? new Date(v.getTime()) : clone(v) : v;
  }

  return out;
},function dissoc(prop, obj) {
  if (arguments.length === 1) return _obj => dissoc(prop, _obj);
  if (obj === null || obj === undefined) return {};
  const willReturn = {};

  for (const p in obj) {
    willReturn[p] = obj[p];
  }

  delete willReturn[prop];
  return willReturn;
},function has(prop, obj) {
  if (arguments.length === 1) return _obj => has(prop, _obj);
  if (!obj) return false;
  return obj[prop] !== undefined;
},function isEmpty(input) {
  const inputType = type(input);
  if (['Undefined', 'NaN', 'Number', 'Null'].includes(inputType)) return false;
  if (!input) return true;

  if (inputType === 'Object') {
    return Object.keys(input).length === 0;
  }

  if (inputType === 'Array') {
    return input.length === 0;
  }

  return false;
},function keys(obj) {
  return Object.keys(obj);
},function lens(getter, setter) {
  if (arguments.length === 1) return _setter => lens(getter, _setter);
  return function (functor) {
    return function (target) {
      return functor(getter(target)).map(focus => setter(focus, target));
    };
  };
},function lensIndex(i) {
  return lens(nth(i), update(i));
},function lensPath(key) {
  return lens(path(key), assocPath(key));
},function lensProp(key) {
  return lens(prop(key), assoc(key));
},function merge(obj, props) {
  if (arguments.length === 1) return _props => merge(obj, _props);
  return Object.assign({}, obj || {}, props || {});
},function omit(keys, obj) {
  if (arguments.length === 1) return _obj => omit(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};

  for (const key in obj) {
    if (!keysValue.includes(key)) {
      willReturn[key] = obj[key];
    }
  }

  return willReturn;
},function over(lens, fn, object) {
  if (arguments.length === 1) return (_fn, _object) => over(lens, _fn, _object);
  if (arguments.length === 2) return _object => over(lens, fn, _object);
  return lens(x => Identity(fn(x)))(object).x;
},function path(list, obj) {
  if (arguments.length === 1) return _obj => path(list, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  let willReturn = obj;
  let counter = 0;
  const pathArrValue = typeof list === 'string' ? list.split('.') : list;

  while (counter < pathArrValue.length) {
    if (willReturn === null || willReturn === undefined) {
      return undefined;
    }

    willReturn = willReturn[pathArrValue[counter]];
    counter++;
  }

  return willReturn;
},(..._args) => (rest => rest.length >= fn.length ? fn(...rest) : curry(fn, rest))([...args, ..._args]),function paths(pathsInput, obj) {
  return pathsInput.map(singlePath => path(singlePath, obj));
},function pick(keys, obj) {
  if (arguments.length === 1) return _obj => pick(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    }

    counter++;
  }

  return willReturn;
},function pickAll(keys, obj) {
  if (arguments.length === 1) return _obj => pickAll(keys, _obj);

  if (obj === null || obj === undefined) {
    return undefined;
  }

  const keysValue = typeof keys === 'string' ? keys.split(',') : keys;
  const willReturn = {};
  let counter = 0;

  while (counter < keysValue.length) {
    if (keysValue[counter] in obj) {
      willReturn[keysValue[counter]] = obj[keysValue[counter]];
    } else {
      willReturn[keysValue[counter]] = undefined;
    }

    counter++;
  }

  return willReturn;
},function prop(key, obj) {
  if (arguments.length === 1) return _obj => prop(key, _obj);
  if (!obj) return undefined;
  return obj[key];
},function propOr(defaultValue, p, obj) {
  if (arguments.length === 2) return _obj => propOr(defaultValue, p, _obj);
  if (arguments.length === 1) return (_p, _obj) => propOr(defaultValue, _p, _obj);
  if (!obj) return defaultValue;
  return defaultTo(defaultValue, obj[p]);
},function set(lens, v, x) {
  if (arguments.length === 1) return (_v, _x) => set(lens, _v, _x);
  if (arguments.length === 2) return _x => set(lens, v, _x);
  return over(lens, always(v), x);
},function tap(fn, x) {
  if (arguments.length === 1) return _x => tap(fn, _x);
  fn(x);
  return x;
},function toPairs(obj) {
  return Object.entries(obj);
},function values(obj) {
  if (type(obj) !== 'Object') return [];
  return Object.values(obj);
},function view(lens, target) {
  if (arguments.length === 1) return _target => view(lens, _target);
  return lens(Const)(target).x;
}