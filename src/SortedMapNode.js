/**
 *  Copyright (c) 2014-2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

export class SortedMapNode {
  constructor(comparator, options, ownerID) {
    this.comparator = comparator;
    this.options = options;
    this.ownerID = ownerID;
  }

  getComparator() {}
  // eslint-disable-next-line  no-unused-vars
  get(key, notSetValue) {}
  // eslint-disable-next-line  no-unused-vars
  upsert(ownerID, key, value, didChangeSize, didAlter) {}
  // eslint-disable-next-line  no-unused-vars
  remove(ownerID, key, didChangeSize, didAlter) {}
  // eslint-disable-next-line  no-unused-vars
  fastRemove(ownerID, key, didChangeSize, didAlter) {}
  // eslint-disable-next-line  no-unused-vars
  iterate(fn, reverse) {}
  // eslint-disable-next-line  no-unused-vars
  print(level, maxDepth) {}
  // eslint-disable-next-line  no-unused-vars
  checkConsistency(printFlag) {}
}

export class SortedMapPacker {
  // eslint-disable-next-line  no-unused-vars
  pack(comparator, options, ownerID, collection) {}
}

export class SortedMapNodeFactory {
  // eslint-disable-next-line  no-unused-vars
  createNode(comparator, options, ownerID, entries, nodes) {}
  createPacker() {}
  // eslint-disable-next-line  no-unused-vars
  createIterator(map, type, reverse) {}
}
