/**
 * ARES - Autonomous Rover Exploration System
 * Block Coding Configuration Module
 * 
 * Copyright (c) 2025-2026 Korea Science Co., Ltd. and Tongmyong University
 * Licensed under the Apache License, Version 2.0.
 */

// DOM 요소 참조

export const elements = {
    // 상태 표시
    status: document.getElementById('status'),
    deviceInfo: document.getElementById('deviceInfo'),

    // 제어 버튼
    connectButton: document.getElementById('connectButton'),
    disconnectButton: document.getElementById('disconnectButton'),
    runButton: document.getElementById('runButton'),
    saveButton: document.getElementById('saveButton'),
    loadButton: document.getElementById('loadButton'),

    // 파일 입력
    fileInput: document.getElementById('fileInput'),

    // 로그 패널
    logContent: document.getElementById('logContent'),
    logContainer: document.getElementById('logContainer'),
    clearLogBtn: document.getElementById('clearLogBtn')
};