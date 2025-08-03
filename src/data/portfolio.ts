import {
    SkillCategory,
    Project,
    Service,
    ContactMethod,
    SocialLink,
} from '../types';

export const skillCategories: SkillCategory[] = [
    {
        title: 'フロンドエンド',
        skills: [
            { name: 'HTML', icon: 'fab fa-html5', color: 'text-orange-500' },
            { name: 'CSS', icon: 'fab fa-css3-alt', color: 'text-blue-500' },
            { name: 'JavaScript', icon: 'fab fa-js', color: 'text-blue-500' },
            { name: 'React', icon: 'fab fa-react', color: 'text-cyan-400' },
            {
                name: 'TypeScript',
                icon: 'fab fa-js-square',
                color: 'text-yellow-400',
            },
            { name: 'TailwindCSS', icon: 'fas fa-wind', color: 'text-sky-400' },
        ],
    },
    {
        title: 'バックエンド',
        skills: [
            { name: 'C#', icon: 'fab fa-microsoft', color: 'text-green-700' },
            {
                name: '.NET 8',
                icon: 'fab fa-microsoft',
                color: 'text-purple-600',
            },
            { name: 'Python', icon: 'fab fa-python', color: 'text-yellow-500' },
            {
                name: 'SQL Server',
                icon: 'fas fa-database',
                color: 'text-purple-500',
            },
            {
                name: 'Oracle',
                icon: 'fas fa-database',
                color: 'text-orange-700',
            },
            {
                name: 'PostgreSQL',
                icon: 'fas fa-database',
                color: 'text-blue-700',
            },
            {
                name: 'Power Automate',
                icon: 'fas fa-robot',
                color: 'text-pink-400',
            },
            { name: 'VBA', icon: 'fas fa-file-excel', color: 'text-green-600' },
        ],
    },
    {
        title: 'デスクトップアプリ',
        skills: [
            { name: 'WPF', icon: 'fab fa-windows', color: 'text-blue-600' },
        ],
    },
    {
        title: 'その他',
        skills: [
            { name: 'Git', icon: 'fab fa-github', color: 'text-orange-700' },
            { name: 'Docker', icon: 'fab fa-docker', color: 'text-blue-700' },
            {
                name: 'Claude Code',
                icon: 'fab fa-whmcs',
                color: 'text-orange-700',
            },
        ],
    },
];

export const projects: Project[] = [
    {
        id: 1,
        title: '市町村事務処理システム',
        description:
            '住民基本台帳・税関連（住民税、国保税、固定資産税等）・福祉情報に関わる事務処理システムの設計、開発、運用、保守',
        tags: ['C#', 'SQL', 'Oracle'],
        // 業務システムのため非公開
    },
    {
        id: 2,
        title: 'Webシステム移行',
        description: 'C#デスクトップアプリからWebシステムへの移行',
        tags: ['.NET', 'HTML', 'CSS', 'JavaScript', 'SQL Server', 'intramart'],
        // 業務システムのため非公開
    },
    {
        id: 3,
        title: '業務自動化システム',
        description: '既存システムととの連携や定型作業の完全自動化',
        tags: ['Power Automate', 'Python'],
        // 業務システムのため非公開
    },
    {
        id: 4,
        title: '電子帳簿保存法対応システム',
        description: '既存システムとAPI連携した電子帳簿保存法対応',
        tags: ['Python'],
        // 業務システムのため非公開
    },
    {
        id: 5,
        title: '🌈 趣味予報',
        description:
            '天気予報に基づいて趣味に最適なタイミングを提案するWebアプリケーション。屋外・屋内活動の違い、温度・天気の好み、降水確率などを総合的に分析し、7日間の予報から最適な活動日をおすすめ',
        tags: [
            'React',
            'TypeScript',
            'Tailwind CSS',
            'IndexedDB',
            'OpenWeatherMap API',
        ],
        githubUrl: 'https://github.com/suu3play/hobby-weather',
    },
    {
        id: 6,
        title: '📁 Finder Scope',
        description:
            '高性能ファイル検索・置換ツール。ファイル名・内容検索、フィルタリング、CSV/JSON/HTML形式でのエクスポート機能を提供',
        tags: ['.NET 8', 'C#', 'WPF'],
        githubUrl: 'https://github.com/suu3play/finder-scope',
    },
];

export const services: Service[] = [
    {
        id: 1,
        title: 'Webシステム開発',
        icon: 'fas fa-laptop-code',
        items: [
            'C#デスクトップアプリ開発',
            'Webシステムアプリ開発',
            'Web API連携',
            '法改正対応（税制改正、電子帳簿保存法対応等）',
            'メンテナンス・運用支援',
        ],
    },
    {
        id: 2,
        title: '業務自動化',
        icon: 'fas fa-robot',
        items: [
            'Power Automateでのワークフロー自動化',
            '定型業務Bot開発（Slack通知・休暇申請連携）',
            'CSV・Excel自動整形',
            'RPA連携システム構築',
        ],
    },
    {
        id: 3,
        title: '業務改善コンサルティング',
        icon: 'fas fa-chart-line',
        items: [
            '要件整理・ヒアリング',
            '業務フロー改善提案',
            '非エンジニア向けツール開発支援',
        ],
    },
    {
        id: 4,
        title: '帳票・データ処理',
        icon: 'fas fa-file-alt',
        items: [
            '帳票出力システム開発',
            'Excel VBAでのデータ加工自動化',
            'データベース連携システム',
        ],
    },
];

export const contactMethods: ContactMethod[] = [
    { icon: 'fas fa-envelope', text: 'bstale11@gmail.com' },
    { icon: 'fas fa-phone', text: '+81 90 1234 5678' },
    { icon: 'fas fa-map-marker-alt', text: '群馬, 日本' },
];

export const socialLinks: SocialLink[] = [
    {
        name: 'GitHub',
        url: 'https://github.com/suu3play',
        icon: 'fab fa-github',
    },
    { name: 'Qiita', url: 'https://qiita.com/suu3play', icon: 'fas fa-edit' },
    {
        name: 'Twitter',
        url: 'https://twitter.com/@suu3play',
        icon: 'fab fa-twitter',
    },
];
