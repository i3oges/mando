<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class RequestMetricsGathered
{
    use Dispatchable, InteractsWithSockets, SerializesModels;
    public float $start;
    public float $end;
    public string $uri;
    public float $elapsed;

    /**
     * Create a new event instance.
     */
    public function __construct($start, $end, $uri, $elapsed)
    {
        $this->start = $start;
        $this->end = $end;
        $this->uri = $uri;
        $this->elapsed = $elapsed;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return array<int, \Illuminate\Broadcasting\Channel>
     */
    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('channel-name'),
        ];
    }
}
