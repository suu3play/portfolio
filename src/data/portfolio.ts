import {
    SkillCategory,
    Project,
    Service,
    ContactMethod,
    SocialLink,
} from '../types';

export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
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
        title: 'Backend',
        skills: [
            { name: 'C#', icon: 'fab fa-microsoft', color: 'text-green-700' },
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
        title: 'Webシステム移行プロジェクト',
        description:
            'C#デスクトップアプリからReact/TypeScriptを使用したWebシステムへの移行',
        tags: ['React', 'TypeScript', 'C#', 'SQL Server'],
    },
    {
        id: 2,
        title: '業務自動化システム',
        description:
            'Power AutomateとSlack APIを連携した休暇申請・承認ワークフローの完全自動化',
        tags: ['Power Automate', 'Slack API', 'ワークフロー'],
    },
    {
        id: 3,
        title: '電子帳簿保存法対応システム',
        description:
            '既存システムとAPI連携した電子帳簿保存法対応・PDF自動生成システム',
        tags: ['C#', 'Web API', 'PDF出力'],
    },
];

export const services: Service[] = [
    {
        id: 1,
        title: 'Webシステム開発',
        icon: 'fas fa-laptop-code',
        items: [
            'C#デスクトップアプリからWebシステムへの移行',
            'Web API開発・連携',
            '電子帳簿保存法対応',
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
            'システム導入サポート',
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
            'レポート自動生成',
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
