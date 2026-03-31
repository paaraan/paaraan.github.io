/**
 * ARES - Autonomous Rover Exploration System
 * Block Coding Configuration Module
 * 
 * Copyright (c) 2025-2026 Korea Science Co., Ltd. and Tongmyong University
 * Licensed under the Apache License, Version 2.0.
 */

// 상태 관리

// 디버그 모드
export const DEBUG = false;

// 앱 상태
export const state = {
    // 블루투스 상태
    bluetoothDevice: null,
    bluetoothServer: null,
    uartService: null,
    characteristic: null,
    notificationsEnabled: false,
    readIntervalId: null,
    isConnecting: false,
    lastCommand: null,

    // 실행 상태
    isExecuting: false,

    // 변수 저장소
    variables: {},

    // Promise 상태
    pendingResolve: null,
    pendingReject: null,
    pendingTimeout: null
};